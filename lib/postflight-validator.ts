// ── Postflight Validator ──
// QA gate. Nothing ships without passing this.
// Makes one Claude API call to score coherence across every element of the site.

import Anthropic from '@anthropic-ai/sdk'

export interface PostflightInput {
  businessName: string
  subtype: string
  heroImage: { id: string; tags: string[] }
  serviceLabels: string[]
  headlineText: string
  ctaCopy: string
  trustBadges: string[]
  renderedHtml: string
}

export interface PostflightResult {
  categoryAlignment: number
  copyAlignment: number
  serviceAlignment: number
  ctaAlignment: number
  crossSectionConsistency: number
  hardFails: string[]
  warnings: string[]
  decision: 'PASS' | 'WARN' | 'FAIL' | 'ESCALATE'
  notes: string
}

const SYSTEM_PROMPT = `You are a QA validator for a local business website engine.
You will receive a business payload and rendered HTML.
Your job is to score coherence across every element of the site.
Return only JSON. No fences. No explanation outside the JSON.

Score these dimensions 1.0-10.0:
- categoryAlignment: does the hero image match the business subtype
- copyAlignment: does all copy belong to this industry
- serviceAlignment: do the services make sense for this business type
- ctaAlignment: does the CTA match what this business actually sells
- crossSectionConsistency: does everything on the page belong together

Hard fail triggers (immediately set decision to FAIL):
- Hero image tags indicate a different food category than the business subtype
- Service labels belong to a clearly different industry
- Copy uses industry-specific language from the wrong industry
- Trust badges reference a certification irrelevant to business type
- FAQ answers describe a different service than what the business offers

Decision logic:
- All scores >= 8.5 and zero hard fails → PASS
- Any score 7.0-8.4 and zero hard fails → WARN
- Any score below 7.0 OR any hard fail → FAIL
- Multiple hard fails OR categoryAlignment below 3.0 → ESCALATE

Return this exact JSON shape:
{
  "categoryAlignment": 0.0,
  "copyAlignment": 0.0,
  "serviceAlignment": 0.0,
  "ctaAlignment": 0.0,
  "crossSectionConsistency": 0.0,
  "hardFails": [],
  "warnings": [],
  "decision": "PASS" | "WARN" | "FAIL" | "ESCALATE",
  "notes": "one sentence summary"
}`

function buildUserMessage(input: PostflightInput): string {
  // Truncate HTML to avoid token overload — keep head + first 2000 chars of body
  const htmlSnippet = input.renderedHtml.length > 4000
    ? input.renderedHtml.slice(0, 4000) + '\n... [truncated]'
    : input.renderedHtml

  return JSON.stringify({
    businessName: input.businessName,
    subtype: input.subtype,
    heroImage: input.heroImage,
    serviceLabels: input.serviceLabels,
    headlineText: input.headlineText,
    ctaCopy: input.ctaCopy,
    trustBadges: input.trustBadges,
    renderedHtml: htmlSnippet,
  })
}

const DEFAULT_FAIL: PostflightResult = {
  categoryAlignment: 0,
  copyAlignment: 0,
  serviceAlignment: 0,
  ctaAlignment: 0,
  crossSectionConsistency: 0,
  hardFails: ['Postflight validation could not complete — API error'],
  warnings: [],
  decision: 'FAIL',
  notes: 'Postflight validation failed due to API error. Manual review required.',
}

/**
 * Run postflight validation against a rendered site.
 * Requires ANTHROPIC_API_KEY in environment.
 */
export async function runPostflight(
  input: PostflightInput,
): Promise<PostflightResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.warn('[postflight] ANTHROPIC_API_KEY not set — returning default FAIL')
    return {
      ...DEFAULT_FAIL,
      hardFails: ['ANTHROPIC_API_KEY not configured'],
      notes: 'Cannot run postflight without API key. Set ANTHROPIC_API_KEY.',
    }
  }

  const client = new Anthropic({ apiKey })

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: 'user', content: buildUserMessage(input) },
      ],
    })

    const text = response.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')
      .trim()

    const result: PostflightResult = JSON.parse(text)

    // Enforce decision logic server-side (don't trust LLM decision alone)
    result.decision = computeDecision(result)

    return result
  } catch (err) {
    console.error('[postflight] API call failed:', err)
    return { ...DEFAULT_FAIL }
  }
}

function computeDecision(result: PostflightResult): PostflightResult['decision'] {
  const scores = [
    result.categoryAlignment,
    result.copyAlignment,
    result.serviceAlignment,
    result.ctaAlignment,
    result.crossSectionConsistency,
  ]

  const hardFailCount = result.hardFails?.length || 0

  // ESCALATE: multiple hard fails or catastrophic category mismatch
  if (hardFailCount >= 2 || result.categoryAlignment < 3.0) {
    return 'ESCALATE'
  }

  // FAIL: any hard fail or any score below 7.0
  if (hardFailCount > 0 || scores.some((s) => s < 7.0)) {
    return 'FAIL'
  }

  // WARN: any score between 7.0 and 8.5
  if (scores.some((s) => s < 8.5)) {
    return 'WARN'
  }

  // PASS: all scores >= 8.5 and zero hard fails
  return 'PASS'
}

/**
 * Quick synchronous check without API call.
 * Catches obvious mismatches before burning an API call.
 */
export function preflightCheck(input: PostflightInput): {
  pass: boolean
  issues: string[]
} {
  const issues: string[] = []

  // Check hero image tags don't belong to a different food category
  const foodSubtypes = ['pizza', 'burger', 'taco_mexican', 'bbq', 'japanese_food', 'sandwich_deli', 'bakery', 'coffee_cafe', 'bar_brewery']
  if (foodSubtypes.includes(input.subtype)) {
    const otherFoodTags = foodSubtypes
      .filter((f) => f !== input.subtype)
      .flatMap((f) => f.split('_'))
    const heroTagsLower = input.heroImage.tags.map((t) => t.toLowerCase())
    for (const tag of heroTagsLower) {
      if (otherFoodTags.includes(tag)) {
        issues.push(`Hero image tag "${tag}" belongs to a different food category than "${input.subtype}"`)
      }
    }
  }

  // Check service labels aren't from a wildly different industry
  if (input.subtype === 'roofing') {
    for (const label of input.serviceLabels) {
      if (/pizza|sushi|karate|dental|salon/i.test(label)) {
        issues.push(`Service label "${label}" does not belong on a roofing site`)
      }
    }
  }

  return { pass: issues.length === 0, issues }
}
