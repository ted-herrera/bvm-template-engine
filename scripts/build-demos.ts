import fs from 'fs'
import path from 'path'
import { injectVariables } from '../engine/inject'
import { BVMSiteVariables } from '../variables/schema'

const ROOT = path.join(__dirname, '..')

function loadTemplate(name: 'local' | 'community' | 'premier'): string {
  return fs.readFileSync(path.join(ROOT, 'templates', name, 'index.html'), 'utf-8')
}

// ==================== 1. Tulsa Green Landscaping (Local) ====================
const tulsaGreen: BVMSiteVariables = {
  businessName: 'Tulsa Green Landscaping',
  ownerName: 'Marcus Webb',
  phone: '(918) 555-0142',
  email: 'marcus@tulsagreenlandscaping.com',
  address: '4512 S Peoria Ave',
  city: 'Tulsa',
  state: 'OK',
  zip: '74105',
  domain: 'tulsagreenlandscaping.com',
  yearsInBusiness: '12',
  tagline: "Tulsa's Trusted Lawn & Landscape Experts",
  heroHeadline: 'Transform Your Outdoors into a Year-Round Oasis',
  cta: 'Get a Free Estimate',
  aboutText:
    'Tulsa Green Landscaping has been beautifying Tulsa yards for over 12 years. Founded by Marcus Webb, we bring professional expertise and genuine care to every project.',
  template: 'local',
  primaryColor: '#2d5a27',
  secondaryColor: '#5a814d',
  accentColor: '#f5f0e8',
  services: [
    {
      name: 'Lawn Maintenance',
      description: 'Weekly mowing, edging, and cleanup for a yard that always looks its best.',
      photoUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    },
    {
      name: 'Landscape Design',
      description: 'Custom designs that transform your outdoor space.',
      photoUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800',
    },
    {
      name: 'Irrigation Systems',
      description: 'Smart watering systems that save water and money.',
      photoUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=800',
    },
  ],
  faqs: [
    { question: 'Do you offer free estimates?', answer: 'Yes — always free, no obligation.' },
    { question: 'Are you licensed and insured?', answer: 'Fully licensed and insured in Oklahoma.' },
    { question: 'What areas do you serve?', answer: 'All of Tulsa County and surrounding areas.' },
    { question: 'Do you work year-round?', answer: 'Yes, including leaf removal and winter prep.' },
    { question: 'How do I get started?', answer: 'Call us or fill out the form above.' },
  ],
  heroPhotoUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
  pricingTier: 'good',
  monthlyPrice: '249',
  setupFee: '399',
  pricingLabel: 'Good · Local Site',
  pricingFeatures: [
    '5-Page Professional Site',
    'Mobile Responsive',
    'Google Business Setup',
    'Contact Form + Map',
    'BVM Hosting Included',
  ],
  seoStatus: 'not-submitted',
  businessType: 'Landscaping',
  rawBusinessDescription:
    'landscaping and irrigation services for residential and commercial properties in Tulsa Oklahoma',
  toneHints: ['community'],
  audienceHints: [],
}

// ==================== 2. Herrera Roofing (Community) ====================
const herreraRoofing: BVMSiteVariables = {
  businessName: 'Herrera Roofing',
  ownerName: 'Ted Herrera',
  phone: '(918) 555-0187',
  email: 'ted@herreraroofing.com',
  address: '6821 E 41st St',
  city: 'Tulsa',
  state: 'OK',
  zip: '74145',
  domain: 'herreraroofing.com',
  yearsInBusiness: '18',
  tagline: "Tulsa's Most Trusted Roofing Company",
  heroHeadline: 'Reliable Roofing You Can Trust',
  cta: 'Get a Free Estimate',
  aboutText:
    'Owned and operated by Ted Herrera, Herrera Roofing proudly serves homeowners and property owners across Tulsa with dependable roofing solutions and exceptional workmanship.',
  template: 'community',
  primaryColor: '#111111',
  secondaryColor: '#b51217',
  accentColor: '#ffffff',
  services: [
    {
      name: 'Residential Roofing',
      description: 'Complete residential roof installation, repair and replacement with quality materials.',
      photoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    },
    {
      name: 'Commercial Roofing',
      description: 'Durable commercial roofing solutions for businesses across Tulsa.',
      photoUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    },
    {
      name: 'Storm Damage Repair',
      description: 'Fast emergency response for storm damage — we protect your home when it matters most.',
      photoUrl: 'https://images.unsplash.com/photo-1558618047-f4e90fca3ed9?w=800',
    },
  ],
  faqs: [
    { question: 'Do you offer free estimates?', answer: 'Yes, always free with no obligation.' },
    { question: 'How long does a roof replacement take?', answer: 'Most residential roofs are completed in 1-2 days.' },
    { question: 'Are you licensed and insured?', answer: 'Fully licensed and insured in Oklahoma.' },
    { question: 'Do you work with insurance claims?', answer: 'Yes, we work directly with all major insurance companies.' },
    { question: 'What areas do you serve?', answer: 'All of Tulsa County and surrounding areas.' },
  ],
  heroPhotoUrl: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3a?w=1600',
  pricingTier: 'better',
  monthlyPrice: '349',
  setupFee: '499',
  pricingLabel: 'Better · Community Site',
  pricingFeatures: [
    '7-Page Professional Site',
    'Mobile Responsive',
    'Google Business + SEO Submission',
    'Lead Capture Form',
    'Monthly Performance Report',
    'BVM Hosting Included',
  ],
  seoStatus: 'submitted',
  businessType: 'Roofing',
  rawBusinessDescription:
    'roofing and storm damage repair serving residential and commercial properties in Tulsa Oklahoma',
  toneHints: ['professional'],
  audienceHints: [],
}

// ==================== 3. Hank & Beans (Premier) ====================
const hankBeans: BVMSiteVariables = {
  businessName: 'Hank & Beans Attorneys at Law',
  ownerName: 'Hank Beans',
  phone: '(918) 555-0234',
  email: 'info@hankbeans.com',
  address: '401 S Boston Ave, Suite 1200',
  city: 'Tulsa',
  state: 'OK',
  zip: '74103',
  domain: 'hankbeans.com',
  yearsInBusiness: '15',
  tagline: 'Dedicated Legal Service You Can Rely On',
  heroHeadline: 'Trusted Legal Guidance in Tulsa, Oklahoma',
  cta: 'Schedule a Consultation',
  aboutText:
    'At Hank & Beans Attorneys at Law, Attorney Hank Beans delivers dependable results-driven legal representation to clients across Tulsa and surrounding areas. With 15 years of experience, we are committed to clear communication and outcomes that protect your rights.',
  template: 'premier',
  primaryColor: '#1e3a8a',
  secondaryColor: '#c62828',
  accentColor: '#c62828',
  services: [
    {
      name: 'Family Law',
      description: 'Compassionate and strategic family law services for divorce, custody, and more.',
      photoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      name: 'Corporate Law',
      description: 'Comprehensive legal solutions for businesses — contracts, compliance, and disputes.',
      photoUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
    },
    {
      name: 'Criminal Law',
      description: 'Aggressive criminal defense to protect your rights and your future.',
      photoUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800',
    },
  ],
  faqs: [
    { question: 'Do you offer free consultations?', answer: 'Yes, we offer a free 30-minute initial consultation.' },
    { question: 'What areas of law do you practice?', answer: 'Family law, corporate law, and criminal defense.' },
    { question: 'How long have you been practicing?', answer: 'Attorney Hank Beans has 15+ years of experience in Tulsa courts.' },
    { question: 'Do you handle cases outside Tulsa?', answer: 'Yes, we serve all of Tulsa County and surrounding areas.' },
    { question: 'How do I get started?', answer: 'Call us or fill out the contact form to schedule your free consultation.' },
  ],
  heroPhotoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600',
  pricingTier: 'best',
  monthlyPrice: '499',
  setupFee: '699',
  pricingLabel: 'Best · Premier Site',
  pricingFeatures: [
    '10-Page Premium Site',
    'Mobile Responsive',
    'Full SEO Package + Schema Markup',
    'Advanced Lead System',
    'Monthly Analytics Dashboard',
    'Priority Support',
    'BVM Hosting Included',
  ],
  seoStatus: 'indexed',
  businessType: 'Legal',
  rawBusinessDescription:
    'family law corporate law and criminal defense attorney serving Tulsa Oklahoma and surrounding areas',
  toneHints: ['authority', 'professional'],
  audienceHints: ['family', 'adults'],
}

// ==================== BUILD ====================
const demos = [
  { file: 'tulsa-green.html', vars: tulsaGreen },
  { file: 'hurst-roofing.html', vars: herreraRoofing },
  { file: 'captain-law.html', vars: hankBeans },
]

const demosDir = path.join(ROOT, 'public', 'demos')
if (!fs.existsSync(demosDir)) {
  fs.mkdirSync(demosDir, { recursive: true })
}

let successCount = 0
for (const demo of demos) {
  try {
    const template = loadTemplate(demo.vars.template)
    const { html, normalized } = injectVariables(template, demo.vars)
    const outputPath = path.join(demosDir, demo.file)
    fs.writeFileSync(outputPath, html, 'utf-8')
    const sizeKb = (html.length / 1024).toFixed(1)
    console.log(`  ✓ ${demo.file}  (${sizeKb} KB, template=${demo.vars.template})`)
    console.log(`    debugReport:`)
    console.log(`      rawInput: "${normalized.rawInput.slice(0, 80)}"`)
    console.log(`      matchedPhrase: "${normalized.debugReport.matchedPhrase}"`)
    console.log(`      primaryCategory: ${normalized.primaryCategory}${normalized.subtype ? '/' + normalized.subtype : ''}`)
    console.log(`      secondaryCategory: ${normalized.secondaryCategory || '(none)'}`)
    console.log(`      matchedSignals: [${normalized.matchedSignals.join(', ')}]`)
    console.log(`      serviceMode: [${normalized.serviceMode.join(', ')}]`)
    console.log(`      audience: [${normalized.audience.join(', ')}]`)
    console.log(`      brandTone: [${normalized.brandTone.join(', ')}]`)
    console.log(`      modifiers: [${normalized.modifiers.join(', ')}]`)
    console.log(`      photosBucket: ${normalized.debugReport.photosBucket}`)
    console.log(`      reasoning: ${normalized.debugReport.reasoning}`)
    console.log(`      heroPhoto: ${normalized.heroPhotoUrl.slice(0, 60)}...`)
    console.log(`      servicePhotos: [${normalized.servicePhotoUrls.map(u => u.slice(0, 50) + '...').join(', ')}]`)
    console.log('')
    successCount++
  } catch (err) {
    console.error(`  ✗ ${demo.file} — ${(err as Error).message}`)
  }
}

console.log(`Built ${successCount}/${demos.length} demos successfully.`)
if (successCount !== demos.length) {
  process.exit(1)
}
