import fs from 'fs'
import path from 'path'
import { injectVariables } from '../engine/inject'
import { BVMSiteVariables } from '../variables/schema'

const ROOT = path.join(__dirname, '..')

function loadTemplate(name: 'local' | 'community' | 'premier'): string {
  return fs.readFileSync(path.join(ROOT, 'templates', name, 'index.html'), 'utf-8')
}

const STANDARD_FAQS = [
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes — every consultation starts with a no-obligation, free estimate. Just call or use our contact form.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. We carry full licensing, general liability, and workers comp insurance for every job.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve the greater Tulsa metro and surrounding communities throughout Oklahoma.',
  },
  {
    question: 'How quickly can you start my project?',
    answer: 'Most projects can start within one to two weeks of the initial estimate, depending on scope and season.',
  },
  {
    question: 'Do you offer warranties?',
    answer: 'Yes — all of our work is backed by a written workmanship warranty plus any applicable manufacturer warranties.',
  },
]

// ==================== 1. Tulsa Green Landscaping ====================
const tulsaGreen: BVMSiteVariables = {
  businessName: 'Tulsa Green Landscaping',
  ownerName: 'Marcus Webb',
  phone: '(918) 555-0142',
  email: 'marcus@tulsagreenlandscaping.com',
  address: '4512 S Peoria Ave',
  city: 'Tulsa',
  state: 'OK',
  zip: '74105',
  yearsInBusiness: '18',
  tagline: "Tulsa's Trusted Lawn & Landscape Experts",
  heroHeadline: 'Beautiful Yards Start Here',
  cta: 'Get a Free Estimate',
  primaryColor: '#2d5a27',
  secondaryColor: '#f5f0e8',
  accentColor: '#e8a72a',
  services: [
    {
      name: 'Lawn Maintenance',
      description: 'Weekly mowing, edging, trimming, and seasonal fertilization to keep your lawn lush and healthy year-round.',
      photoUrl: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800',
    },
    {
      name: 'Landscape Design',
      description: 'Custom landscape design and installation — from native plant gardens to full yard transformations.',
      photoUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    },
    {
      name: 'Seasonal Cleanup',
      description: 'Spring and fall cleanup, leaf removal, mulching, and pruning to prepare your yard for every season.',
      photoUrl: 'https://images.unsplash.com/photo-1599598425947-5bdd4d4b1a7d?w=800',
    },
  ],
  aboutText:
    "Founded in 2007, Tulsa Green Landscaping has been transforming yards across Tulsa for nearly two decades. Owner Marcus Webb started with one truck and a vision: treat every yard like it was his own. Today, we're proud to be a trusted neighbor to hundreds of Tulsa families — and we still believe the best marketing is a job well done.",
  faqs: STANDARD_FAQS,
  heroPhotoUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
  template: 'local',
  businessType: 'Landscaping',
  domain: 'tulsagreenlandscaping.com',
  domainStatus: 'confirmed',
  seoStatus: 'indexed',
}

// ==================== 2. Herrera Roofing ====================
const herreraRoofing: BVMSiteVariables = {
  businessName: 'Herrera Roofing',
  ownerName: 'Carlos Herrera',
  phone: '(918) 555-0198',
  email: 'carlos@herreraroofing.com',
  address: '6821 E 41st St',
  city: 'Tulsa',
  state: 'OK',
  zip: '74145',
  yearsInBusiness: '22',
  tagline: "Tulsa's Most Trusted Roofing Company",
  heroHeadline: 'Your Roof. Our Reputation.',
  cta: 'Get a Free Inspection',
  primaryColor: '#1B2A4A',
  secondaryColor: '#c0392b',
  accentColor: '#f8f9fa',
  services: [
    {
      name: 'Roof Replacement',
      description: 'Full roof replacements using premium shingles and materials, backed by manufacturer and workmanship warranties.',
      photoUrl: 'https://images.unsplash.com/photo-1632939890255-a2f3ee12a95f?w=800',
    },
    {
      name: 'Storm Damage Repair',
      description: 'Fast, expert storm damage response — from hail and wind repairs to full insurance claim assistance.',
      photoUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
    },
    {
      name: 'Roof Inspection',
      description: 'Comprehensive roof inspections with detailed reports — perfect for homebuyers, sellers, or proactive maintenance.',
      photoUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    },
  ],
  aboutText:
    "For over two decades, Herrera Roofing has been protecting Tulsa homes from the worst that Oklahoma weather can throw at them. Founded by Carlos Herrera in 2003, we've built our reputation one roof at a time — with honest estimates, meticulous workmanship, and the kind of follow-through that turns customers into lifelong clients. When you call Herrera, you get the owner, not a salesperson.",
  faqs: STANDARD_FAQS,
  heroPhotoUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=1600',
  template: 'community',
  businessType: 'Roofing',
  domain: 'herreraroofing.com',
  domainStatus: 'confirmed',
  seoStatus: 'submitted',
}

// ==================== 3. Mooshu Sushi ====================
const mooshuSushi: BVMSiteVariables = {
  businessName: 'Mooshu Sushi',
  ownerName: 'Kenji Tanaka',
  phone: '(918) 555-0177',
  email: 'hello@mooshusushi.com',
  address: '1315 E 15th St',
  city: 'Tulsa',
  state: 'OK',
  zip: '74120',
  yearsInBusiness: '12',
  tagline: "Tulsa's Most Elevated Sushi Experience",
  heroHeadline: 'Where Every Roll Tells a Story',
  cta: 'Reserve a Table',
  primaryColor: '#0a0a0a',
  secondaryColor: '#C9A84C',
  accentColor: '#1a1a1a',
  services: [
    {
      name: 'Omakase Experience',
      description: "A curated, chef's-choice journey through the finest seasonal fish, paired with our most refined preparations.",
      photoUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800',
    },
    {
      name: 'Premium Rolls',
      description: 'Signature rolls crafted from the day\'s freshest catch — bold, balanced, and unforgettable.',
      photoUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    },
    {
      name: 'Private Dining',
      description: 'Intimate private rooms for special occasions, corporate gatherings, and curated tasting menus.',
      photoUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800',
    },
  ],
  aboutText:
    'Mooshu Sushi is the vision of Chef Kenji Tanaka — a Tokyo-trained master who brought his craft to Tulsa in 2014. Every piece of fish is flown in daily. Every rice grain is prepared with reverence. Every plate is an expression of decades of discipline. We don\'t just serve sushi — we offer an experience rooted in tradition, elevated by modern artistry.',
  faqs: [
    {
      question: 'Do you take reservations?',
      answer: 'Yes — we strongly recommend reservations, especially for our omakase experience and weekend dining.',
    },
    {
      question: 'What is omakase?',
      answer: 'Omakase means "I\'ll leave it up to you." Chef Kenji selects each course based on the best fish of the day.',
    },
    {
      question: 'Do you offer private dining?',
      answer: 'Yes. Our private dining rooms accommodate parties of 6 to 20 guests with curated tasting menus.',
    },
    {
      question: 'Is there a dress code?',
      answer: 'We suggest smart casual. No shorts or athletic wear in the main dining room.',
    },
    {
      question: 'Do you offer vegetarian options?',
      answer: 'Absolutely. Chef Kenji has crafted an elegant vegetarian tasting menu upon request.',
    },
  ],
  heroPhotoUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1600',
  template: 'premier',
  businessType: 'Restaurant',
  domain: 'mooshusushi.com',
  domainStatus: 'confirmed',
  seoStatus: 'indexed',
}

// ==================== 4. Hank, Moo & Beans (Legal) ====================
const hankMooBeans: BVMSiteVariables = {
  businessName: 'Hank, Moo & Beans',
  ownerName: 'James Hank',
  phone: '(918) 555-0155',
  email: 'info@hankmoobeans.com',
  address: '401 S Boston Ave, Suite 1200',
  city: 'Tulsa',
  state: 'OK',
  zip: '74103',
  yearsInBusiness: '28',
  tagline: "Tulsa's Trusted Legal Team",
  heroHeadline: "When It Matters Most, We're In Your Corner",
  cta: 'Free Consultation',
  primaryColor: '#1B2A4A',
  secondaryColor: '#c0392b',
  accentColor: '#f8f9fa',
  services: [
    {
      name: 'Personal Injury',
      description: 'Aggressive representation for car accidents, workplace injuries, and wrongful death cases. No fee unless we win.',
      photoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    },
    {
      name: 'Business Law',
      description: 'From entity formation to complex commercial litigation, we guide Tulsa businesses at every stage of growth.',
      photoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    },
    {
      name: 'Estate Planning',
      description: 'Wills, trusts, probate, and estate administration handled with care and clarity for families and their legacies.',
      photoUrl: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800',
    },
  ],
  aboutText:
    "Hank, Moo & Beans has been serving Tulsa families and businesses since 1998. Founded by James Hank, our firm is built on a simple principle: treat every client the way you'd want your own family to be treated. Whether you're facing a personal injury, planning your estate, or navigating a business dispute, we bring deep experience, straight talk, and fierce advocacy to every case we take.",
  faqs: STANDARD_FAQS,
  heroPhotoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600',
  template: 'community',
  businessType: 'Legal',
  domain: 'hankmoobeans.com',
  domainStatus: 'pending',
  seoStatus: 'not-submitted',
}

// ==================== BUILD ====================
const demos = [
  { file: 'tulsa-green-landscaping.html', vars: tulsaGreen },
  { file: 'herrera-roofing.html', vars: herreraRoofing },
  { file: 'mooshu-sushi.html', vars: mooshuSushi },
  { file: 'hank-moo-beans.html', vars: hankMooBeans },
]

const demosDir = path.join(ROOT, 'demos')
if (!fs.existsSync(demosDir)) {
  fs.mkdirSync(demosDir, { recursive: true })
}

let successCount = 0
for (const demo of demos) {
  try {
    const template = loadTemplate(demo.vars.template)
    const html = injectVariables(template, demo.vars)
    const outputPath = path.join(demosDir, demo.file)
    fs.writeFileSync(outputPath, html, 'utf-8')
    const sizeKb = (html.length / 1024).toFixed(1)
    console.log(`  ✓ ${demo.file}  (${sizeKb} KB, template=${demo.vars.template})`)
    successCount++
  } catch (err) {
    console.error(`  ✗ ${demo.file} — ${(err as Error).message}`)
  }
}

console.log(`\nBuilt ${successCount}/${demos.length} demos successfully.`)
if (successCount !== demos.length) {
  process.exit(1)
}
