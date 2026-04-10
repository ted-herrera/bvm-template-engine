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
  return padded
}

function padFaqs(faqs: BVMSiteVariables['faqs']): BVMSiteVariables['faqs'] {
  const padded = [...(faqs || [])]
  while (padded.length < 5) {
    padded.push({ ...EMPTY_FAQ })
  }
  return padded
}

function replaceAll(haystack: string, needle: string, value: string): string {
  return haystack.split(needle).join(value)
}

function buildPricingFeatures(features: string[]): string {
  if (!features || features.length === 0) return ''
  return features.map((f) => `<li>${escapeHtml(f)}</li>`).join('\n')
}

// ── Dynamic HTML builders per template type ──

function buildServicesHtml(
  services: BVMSiteVariables['services'],
  templateType: string,
): string {
  const safe = padServices(services)
  if (templateType === 'premier') {
    let html = ''
    for (const svc of safe) {
      html += `      <div class="service-gallery-card">
        <div class="sg-bg" style="background-image:url('${svc.photoUrl}')" onerror="this.style.background='rgba(0,0,0,0.05)'"></div>
        <div class="sg-overlay"></div>
        <h3>${escapeHtml(svc.name)}</h3>
      </div>\n`
    }
    html += `      <a href="#contact" class="service-contact-card">
        <span>Contact Us</span>
      </a>`
    return html
  }
  if (templateType === 'local') {
    return safe
      .map(
        (svc) => `      <div class="service-card">
        <div class="img" style="background-image:url('${svc.photoUrl}')" onerror="this.style.background='rgba(0,0,0,0.05)'"></div>
        <div class="name-bar"><h3>${escapeHtml(svc.name)}</h3></div>
        <div class="body"><p>${escapeHtml(svc.description)}</p></div>
      </div>`,
      )
      .join('\n')
  }
  // community (default)
  return safe
    .map(
      (svc) => `      <div class="service-card">
        <div class="img" style="background-image:url('${svc.photoUrl}')" onerror="this.style.background='rgba(0,0,0,0.05)'"></div>
        <div class="body">
          <h3>${escapeHtml(svc.name)}</h3>
          <p>${escapeHtml(svc.description)}</p>
        </div>
      </div>`,
    )
    .join('\n')
}

function buildFaqsHtml(faqs: BVMSiteVariables['faqs']): string {
  const safe = padFaqs(faqs)
  return safe
    .map(
      (faq) => `      <div class="faq-item">
        <div class="faq-question">${escapeHtml(faq.question)}</div>
        <div class="faq-answer"><p>${escapeHtml(faq.answer)}</p></div>
      </div>`,
    )
    .join('\n')
}

function buildServiceOptions(services: BVMSiteVariables['services']): string {
  const safe = padServices(services)
  return safe
    .map((svc) => `          <option value="${escapeHtml(svc.name)}">${escapeHtml(svc.name)}</option>`)
    .join('\n')
}

function buildServiceFooterList(services: BVMSiteVariables['services']): string {
  const safe = padServices(services)
  return safe.map((svc) => `          <li>${escapeHtml(svc.name)}</li>`).join('\n')
}

export function injectVariables(
  template: string,
  vars: BVMSiteVariables,
): { html: string; normalized: NormalizedBusiness } {
  // Run normalization
  const normalized = normalize(
    vars.businessType,
    vars.rawBusinessDescription,
    vars.toneHints,
    vars.audienceHints,
  )

  // Auto-fill photos (never overwrite)
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

  // Flatten sectionCopy — only inject if not already set
  const copy = normalized.sectionCopy
  const extras: Record<string, string> = {}

  const copyFields: Array<[string, string]> = [
    ['aboutEyebrow', copy.aboutEyebrow],
    ['whyEyebrow', copy.whyEyebrow],
    ['whyHeadline', copy.whyHeadline],
    ['servicesLabel', copy.servicesLabel],
    ['servicesEyebrow', copy.servicesEyebrow],
    ['reviewsLabel', copy.reviewsLabel],
    ['reviewsEyebrow', copy.reviewsEyebrow],
    ['faqEyebrow', copy.faqEyebrow],
    ['faqLabel', copy.faqLabel],
    ['ctaBannerHeadline', copy.ctaHeadline],
    ['ctaBannerSub', copy.ctaText],
    ['packageLabel', copy.packageLabel],
  ]
  for (const [key, val] of copyFields) {
    extras[key] = val
  }

  // Trust badges
  for (let i = 0; i < 4; i++) {
    extras[`trustBadge${i}`] = copy.trustBadges[i] || ''
  }

  // Why cards (up to 6)
  for (let i = 0; i < 6; i++) {
    const card = copy.whyCards[i]
    extras[`whyCard${i}Title`] = card ? card.title : ''
    extras[`whyCard${i}Body`] = card ? card.body : ''
  }

  // Review snippets
  for (let i = 0; i < 3; i++) {
    extras[`review${i}Text`] = copy.reviewSnippets[i] || ''
  }

  let html = template

  // Indexed service/FAQ tokens (used in tickers, footers, selects, etc.)
  const services = padServices(vars.services)
  const faqs = padFaqs(vars.faqs)
  for (let i = 0; i < services.length; i++) {
    html = replaceAll(html, `{{services[${i}].name}}`, escapeHtml(services[i].name))
    html = replaceAll(html, `{{services[${i}].description}}`, escapeHtml(services[i].description))
    html = replaceAll(html, `{{services[${i}].photoUrl}}`, services[i].photoUrl)
  }
  for (let i = 0; i < faqs.length; i++) {
    html = replaceAll(html, `{{faqs[${i}].question}}`, escapeHtml(faqs[i].question))
    html = replaceAll(html, `{{faqs[${i}].answer}}`, escapeHtml(faqs[i].answer))
  }

  // Dynamic HTML blocks
  html = replaceAll(html, '{{servicesHtml}}', buildServicesHtml(vars.services, vars.template))
  html = replaceAll(html, '{{faqsHtml}}', buildFaqsHtml(vars.faqs))
  html = replaceAll(html, '{{serviceOptions}}', buildServiceOptions(vars.services))
  html = replaceAll(html, '{{serviceFooterList}}', buildServiceFooterList(vars.services))

  // SEO badge (data attribute for client-side rendering)
  html = replaceAll(html, '{{seoStatusBadge}}', `<span class="seo-badge" data-status="${escapeHtml(vars.seoStatus)}"></span>`)

  // Pricing features
  html = replaceAll(html, '{{pricingFeaturesHtml}}', buildPricingFeatures(vars.pricingFeatures || []))

  // Inject extras (sectionCopy fields)
  for (const [key, val] of Object.entries(extras)) {
    html = replaceAll(html, `{{${key}}}`, escapeHtml(val))
  }

  // Scalar keys
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
