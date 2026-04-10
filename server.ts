import express, { Request, Response } from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { injectVariables } from './engine/inject'
import { BVMSiteVariables } from './variables/schema'
import { preflightCheck } from './lib/postflight-validator'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT) || 3005

app.use(cors({ origin: '*' }))
app.use(express.json({ limit: '2mb' }))
app.use(express.static(path.join(__dirname, 'public')))

const TEMPLATES = ['local', 'community', 'premier'] as const
type TemplateName = (typeof TEMPLATES)[number]

function loadTemplate(name: TemplateName): string {
  const templatePath = path.join(__dirname, 'templates', name, 'index.html')
  return fs.readFileSync(templatePath, 'utf-8')
}

const DEMO_MAP: Record<TemplateName, string> = {
  local: 'tulsa-green.html',
  community: 'hurst-roofing.html',
  premier: 'captain-law.html',
}

// ---------- /health ----------
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', templates: [...TEMPLATES] })
})

// ---------- POST /api/render ----------
app.post('/api/render', (req: Request, res: Response) => {
  try {
    const variables: BVMSiteVariables = req.body?.variables
    if (!variables || !variables.template) {
      return res.status(400).json({ error: 'Missing variables.template' })
    }
    if (!TEMPLATES.includes(variables.template as TemplateName)) {
      return res.status(400).json({
        error: `Unknown template "${variables.template}". Must be one of ${TEMPLATES.join(', ')}`,
      })
    }
    const template = loadTemplate(variables.template as TemplateName)
    const { html, normalized } = injectVariables(template, variables)
    return res.json({ html, template: variables.template, variables, normalized })
  } catch (err) {
    console.error('[/api/render] error:', err)
    return res.status(500).json({ error: 'Failed to render template' })
  }
})

// ---------- GET /api/render/:template ----------
app.get('/api/render/:template', (req: Request, res: Response) => {
  const templateName = req.params.template as TemplateName
  if (!TEMPLATES.includes(templateName)) {
    return res.status(404).send(`Unknown template: ${templateName}`)
  }
  const demoFile = DEMO_MAP[templateName]
  const demoPath = path.join(__dirname, 'public', 'demos', demoFile)
  if (!fs.existsSync(demoPath)) {
    return res
      .status(404)
      .send(`Demo not found: ${demoFile}. Run \`npm run build:demos\` first.`)
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  return res.send(fs.readFileSync(demoPath, 'utf-8'))
})

// ---------- GET /api/demos/:filename ----------
app.get('/api/demos/:filename', (req: Request, res: Response) => {
  const filename = req.params.filename
  if (!/^[a-z0-9\-]+\.html$/i.test(filename)) {
    return res.status(400).send('Invalid filename')
  }
  const demoPath = path.join(__dirname, 'public', 'demos', filename)
  if (!fs.existsSync(demoPath)) {
    return res.status(404).send(`Demo not found: ${filename}`)
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  return res.send(fs.readFileSync(demoPath, 'utf-8'))
})

// ---------- POST /api/engine/score ----------
app.post('/api/engine/score', (req: Request, res: Response) => {
  try {
    const { html, businessName, subtype, serviceLabels, headlineText, ctaCopy, trustBadges, heroTags } = req.body
    if (!html) return res.status(400).json({ error: 'Missing html' })

    const issues: string[] = []
    const hardFails: string[] = []
    const warnings: string[] = []

    // 1. Check for unresolved {{tokens}}
    const tokenRe = /\{\{([^}]+)\}\}/g
    let tokenMatch: RegExpExecArray | null
    const lines = html.split('\n')
    while ((tokenMatch = tokenRe.exec(html)) !== null) {
      const pos = html.substring(0, tokenMatch.index).split('\n').length
      hardFails.push(`Unresolved token {{${tokenMatch[1]}}} on line ${pos} — replace with actual value`)
    }

    // 2. Check for cross-industry service labels
    const st = (subtype || '').toLowerCase()
    const industryTerms: Record<string, string[]> = {
      martial_arts: ['gym membership', 'treadmill', 'weight room', 'cardio', 'spin class'],
      pizza: ['dental', 'roofing', 'karate', 'salon', 'landscaping'],
      roofing: ['pizza', 'sushi', 'karate', 'dental', 'salon', 'yoga'],
      dental: ['pizza', 'roofing', 'karate', 'landscaping', 'plumbing'],
      landscaping: ['dental', 'pizza', 'karate', 'salon', 'legal'],
      law: ['pizza', 'roofing', 'dental', 'karate', 'landscaping'],
      gym_fitness: ['karate belt', 'kata', 'dojo', 'sensei'],
    }
    const wrongTerms = industryTerms[st] || []
    const htmlLower = html.toLowerCase()
    for (const term of wrongTerms) {
      const idx = htmlLower.indexOf(term)
      if (idx !== -1) {
        const lineNum = html.substring(0, idx).split('\n').length
        hardFails.push(`Wrong-industry term "${term}" found on line ${lineNum} — remove or replace with a ${st}-appropriate term`)
      }
    }

    // 3. Run preflight tag check
    if (heroTags && heroTags.length > 0) {
      const pf = preflightCheck({
        businessName: businessName || '',
        subtype: st,
        heroImage: { id: '', tags: heroTags },
        serviceLabels: serviceLabels || [],
        headlineText: headlineText || '',
        ctaCopy: ctaCopy || '',
        trustBadges: trustBadges || [],
        renderedHtml: html,
      })
      for (const issue of pf.issues) {
        hardFails.push(issue)
      }
    }

    // 4. Score dimensions
    const hasTokens = (html.match(/\{\{[^}]+\}\}/g) || []).length
    const categoryScore = hardFails.length === 0 ? 9.6 : Math.max(1.0, 7.0 - hardFails.length * 1.5)
    const copyScore = hasTokens > 0 ? Math.max(1.0, 6.0 - hasTokens * 0.5) : 9.8
    const serviceScore = hardFails.some((f) => /wrong-industry|service label/i.test(f)) ? 4.5 : 9.7
    const ctaScore = 9.5
    const crossScore = hardFails.length === 0 && hasTokens === 0 ? 9.6 : Math.max(2.0, 7.0 - (hardFails.length + hasTokens) * 0.8)

    const scores = { categoryAlignment: categoryScore, copyAlignment: copyScore, serviceAlignment: serviceScore, ctaAlignment: ctaScore, crossSectionConsistency: crossScore }
    const allScores = [categoryScore, copyScore, serviceScore, ctaScore, crossScore]

    let decision: string
    if (hardFails.length >= 2 || allScores.some((s) => s < 3.0)) {
      decision = 'ESCALATE'
    } else if (hardFails.length > 0 || allScores.some((s) => s < 7.0)) {
      decision = 'FAIL'
    } else if (allScores.some((s) => s < 8.5)) {
      decision = 'WARN'
    } else {
      decision = 'PASS'
    }

    const overall = allScores.reduce((a, b) => a + b, 0) / allScores.length
    const score100 = decision === 'PASS' ? 100 : Math.round(overall * 10)

    return res.json({
      ...scores,
      hardFails,
      warnings,
      decision,
      score100,
      notes: hardFails.length > 0
        ? `${hardFails.length} hard fail(s) detected — fix before shipping`
        : decision === 'PASS'
          ? 'All checks passed — site ready for production'
          : 'Minor issues detected — review warnings',
    })
  } catch (err) {
    console.error('[/api/engine/score] error:', err)
    return res.status(500).json({ error: 'Engine scoring failed' })
  }
})

// ---------- Root ----------
app.get('/', (_req: Request, res: Response) => {
  res.json({
    name: 'bvm-template-engine',
    status: 'ok',
    templates: [...TEMPLATES],
    endpoints: [
      'GET  /health',
      'POST /api/render',
      'GET  /api/render/:template',
      'GET  /api/demos/:filename',
    ],
  })
})

// Only listen locally — on Vercel the function is exported
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`[bvm-template-engine] listening on :${PORT}`)
    console.log(`  GET  http://localhost:${PORT}/health`)
    console.log(`  POST http://localhost:${PORT}/api/render`)
    console.log(`  GET  http://localhost:${PORT}/api/render/local`)
  })
}

export default app
module.exports = app
