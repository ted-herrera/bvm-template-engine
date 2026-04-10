import { BVMSiteVariables } from '../variables/schema'
import { normalize, NormalizedBusiness } from './normalize'

const EMPTY_SERVICE = {
  name: 'Service',
  description: 'Professional service tailored to your needs.',
  photoUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
}

const EMPTY_FAQ = {
  question: 'Do you offer free consultations?',
  answer: 'Yes — reach out any time and we will get right back to you.',
}

function seoBadge(status: BVMSiteVariables['seoStatus']): string {
  switch (status) {
    case 'indexed':
      return '<span class="seo-badge seo-indexed">Google Indexed</span>'
    case 'submitted':
      return '<span class="seo-badge seo-submitted">Google Submitted</span>'
    case 'not-submitted':
    default:
      return '<span class="seo-badge seo-pending">SEO Pending</span>'
  }
}

function escapeHtml(value: string): string {
  if (value == null) return ''
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function padServices(services: BVMSiteVariables['services']): BVMSiteVariables['services'] {
  const padded = [...(services || [])]
  while (padded.length < 3) {
    padded.push({ ...EMPTY_SERVICE, name: `Service ${padded.length + 1}` })
  }
  return padded.slice(0, 3)
}

function padFaqs(faqs: BVMSiteVariables['faqs']): BVMSiteVariables['faqs'] {
  const padded = [...(faqs || [])]
  while (padded.length < 5) {
    padded.push({ ...EMPTY_FAQ })
  }
  return padded.slice(0, 5)
}

function replaceAll(haystack: string, needle: string, value: string): string {
  return haystack.split(needle).join(value)
}

function buildPricingFeatures(features: string[]): string {
  if (!features || features.length === 0) return ''
  return features.map((f) => `<li>${escapeHtml(f)}</li>`).join('\n')
}

export function injectVariables(
  template: string,
  vars: BVMSiteVariables,
): { html: string; normalized: NormalizedBusiness } {
  // Run normalization — auto-fill empty photos
  const normalized = normalize(
    vars.businessType,
    vars.rawBusinessDescription,
    vars.toneHints,
    vars.audienceHints,
  )

  if (!vars.heroPhotoUrl) {
    vars.heroPhotoUrl = normalized.heroPhotoUrl
  }

  if (Array.isArray(vars.services)) {
    vars.services.forEach((svc, i) => {
      if (svc && !svc.photoUrl) {
        svc.photoUrl = normalized.servicePhotoUrls[i] || normalized.servicePhotoUrls[0] || ''
      }
    })
  }

  let html = template

  const services = padServices(vars.services)
  const faqs = padFaqs(vars.faqs)

  // Service slots
  for (let i = 0; i < 3; i++) {
    html = replaceAll(html, `{{services[${i}].name}}`, escapeHtml(services[i].name))
    html = replaceAll(html, `{{services[${i}].description}}`, escapeHtml(services[i].description))
    html = replaceAll(html, `{{services[${i}].photoUrl}}`, services[i].photoUrl)
  }

  // FAQ slots
  for (let i = 0; i < 5; i++) {
    html = replaceAll(html, `{{faqs[${i}].question}}`, escapeHtml(faqs[i].question))
    html = replaceAll(html, `{{faqs[${i}].answer}}`, escapeHtml(faqs[i].answer))
  }

  // SEO badge
  html = replaceAll(html, '{{seoStatusBadge}}', seoBadge(vars.seoStatus))

  // Pricing features as <li> items
  html = replaceAll(html, '{{pricingFeaturesHtml}}', buildPricingFeatures(vars.pricingFeatures || []))

  // Simple scalar keys — order matters: longer keys before shorter
  const scalarKeys: Array<keyof BVMSiteVariables> = [
    'businessName',
    'ownerName',
    'phone',
    'email',
    'address',
    'city',
    'state',
    'zip',
    'yearsInBusiness',
    'tagline',
    'heroHeadline',
    'cta',
    'primaryColor',
    'secondaryColor',
    'accentColor',
    'aboutText',
    'heroPhotoUrl',
    'template',
    'businessType',
    'domain',
    'seoStatus',
    'pricingTier',
    'monthlyPrice',
    'setupFee',
    'pricingLabel',
  ]

  const SKIP_ESCAPE = new Set([
    'primaryColor',
    'secondaryColor',
    'accentColor',
    'heroPhotoUrl',
    'domain',
  ])

  for (const key of scalarKeys) {
    const raw = (vars[key] as unknown as string) ?? ''
    const value = SKIP_ESCAPE.has(key) ? String(raw) : escapeHtml(String(raw))
    html = replaceAll(html, `{{${key}}}`, value)
  }

  return { html, normalized }
}
