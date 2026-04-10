import express, { Request, Response } from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { injectVariables } from './engine/inject'
import { BVMSiteVariables } from './variables/schema'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT) || 3005

app.use(cors({ origin: '*' }))
app.use(express.json({ limit: '2mb' }))

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
    const html = injectVariables(template, variables)
    return res.json({ html, template: variables.template, variables })
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
  const demoPath = path.join(__dirname, 'demos', demoFile)
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
  const demoPath = path.join(__dirname, 'demos', filename)
  if (!fs.existsSync(demoPath)) {
    return res.status(404).send(`Demo not found: ${filename}`)
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  return res.send(fs.readFileSync(demoPath, 'utf-8'))
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
