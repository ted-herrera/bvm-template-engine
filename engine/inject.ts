import { BVMSiteVariables } from '../variables/schema'

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
      return '<span class="seo-badge seo-indexed">🟢 Google Indexed</span>'
    case 'submitted':
      return '<span class="seo-badge seo-submitted">🟡 Google Submitted</span>'
    case 'not-submitted':
    default:
      return '<span class="seo-badge seo-pending">⚪ Not Submitted</span>'
  }
}

function domainNote(vars: BVMSiteVariables): string {
  if (vars.domainStatus === 'pending') {
    return `<div class="domain-note">Domain <strong>${escapeHtml(vars.domain)}</strong> is pending setup.</div>`
  }
  if (vars.domainStatus === 'needs-help') {
    return `<div class="domain-note">Domain <strong>${escapeHtml(vars.domain)}</strong> needs assistance — contact support.</div>`
  }
  return ''
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

export function injectVariables(template: string, vars: BVMSiteVariables): string {
  let html = template

  const services = padServices(vars.services)
  const faqs = padFaqs(vars.faqs)

  // Service slots
  for (let i = 0; i < 3; i++) {
    html = replaceAll(html, `{{services[${i}].name}}`, escapeHtml(services[i].name))
    html = replaceAll(html, `{{services[${i}].description}}`, escapeHtml(services[i].description))
    html = replaceAll(html, `{{services[${i}].photoUrl}}`, escapeHtml(services[i].photoUrl))
  }

  // FAQ slots
  for (let i = 0; i < 5; i++) {
    html = replaceAll(html, `{{faqs[${i}].question}}`, escapeHtml(faqs[i].question))
    html = replaceAll(html, `{{faqs[${i}].answer}}`, escapeHtml(faqs[i].answer))
  }

  // SEO badge + domain note (before generic key loop so they don't get stripped)
  html = replaceAll(html, '{{seoStatusBadge}}', seoBadge(vars.seoStatus))
  html = replaceAll(html, '{{domainStatusNote}}', domainNote(vars))

  // Simple scalar keys
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
    'domainStatus',
    'seoStatus',
  ]

  for (const key of scalarKeys) {
    const raw = (vars[key] as unknown as string) ?? ''
    // Colors + URLs should not be HTML-escaped (they go into style/src attributes)
    const skipEscape =
      key === 'primaryColor' ||
      key === 'secondaryColor' ||
      key === 'accentColor' ||
      key === 'heroPhotoUrl'
    const value = skipEscape ? String(raw) : escapeHtml(String(raw))
    html = replaceAll(html, `{{${key}}}`, value)
  }

  return html
}
