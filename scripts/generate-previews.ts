import fs from 'fs'
import path from 'path'
import { injectVariables } from '../engine/inject'
import { BVMSiteVariables } from '../variables/schema'
import { resolveImagesAtIntake } from '../lib/studio-engine'
import { selectServiceImages } from '../lib/photo-library'

const ROOT = path.join(__dirname, '..')

function loadTemplate(name: 'local' | 'community' | 'premier'): string {
  return fs.readFileSync(path.join(ROOT, 'templates', name, 'index.html'), 'utf-8')
}

// ── Resolve images from curated pools ──

const karateSite = resolveImagesAtIntake(
  'preview-karate-001',
  'Champions Karate Academy',
  'martial arts',
  'kids martial arts and self defense, Tulsa OK',
  3,
  ['children', 'family'],
)

const pizzaSite = resolveImagesAtIntake(
  'preview-pizza-001',
  "Tony's Pizza",
  'pizza',
  'New York style pizza and takeout, Tulsa OK',
  3,
)

console.log('Karate classification:', karateSite.classification.subtype)
console.log('Karate hero:', karateSite.heroImage.url)
console.log('Karate service images:', karateSite.serviceImages.map(s => s.tags.join('/')))
console.log('')
console.log('Pizza classification:', pizzaSite.classification.subtype)
console.log('Pizza hero:', pizzaSite.heroImage.url)
console.log('Pizza service images:', pizzaSite.serviceImages.map(s => s.tags.join('/')))
console.log('')

// ── Build karate site ──

const karateVars: BVMSiteVariables = {
  businessName: 'Champions Karate Academy',
  ownerName: 'Sensei David Park',
  phone: '(918) 555-0311',
  email: 'info@championskarate.com',
  address: '7821 S Memorial Dr',
  city: 'Tulsa',
  state: 'OK',
  zip: '74133',
  domain: 'championskarate.com',
  yearsInBusiness: '14',
  tagline: "Tulsa's Premier Kids Martial Arts Academy",
  heroHeadline: 'Build Confidence. Build Strength. Build Character.',
  cta: 'Book a Free Trial Class',
  aboutText: 'Champions Karate Academy has been teaching discipline, respect, and self-defense to Tulsa families for over 14 years. Founded by Sensei David Park, a 5th-degree black belt, we offer age-appropriate programs for kids ages 4 and up, teens, and adults. Our structured curriculum builds confidence, physical fitness, and life skills that extend far beyond the dojo.',
  template: 'community',
  primaryColor: '#111111',
  secondaryColor: '#c0392b',
  accentColor: '#ffffff',
  services: [
    {
      name: 'Kids Karate (Ages 4-12)',
      description: 'Age-appropriate martial arts training that builds confidence, discipline, and coordination through structured belt progression.',
      photoUrl: karateSite.serviceImages[0]?.url || '',
    },
    {
      name: 'Teen & Adult Self Defense',
      description: 'Practical self-defense techniques combined with traditional martial arts training for teens and adults of all skill levels.',
      photoUrl: karateSite.serviceImages[1]?.url || '',
    },
    {
      name: 'Private Lessons & Belt Testing',
      description: 'One-on-one instruction for accelerated progress and official belt testing ceremonies with the whole family.',
      photoUrl: karateSite.serviceImages[2]?.url || '',
    },
  ],
  faqs: [
    { question: 'What age can my child start?', answer: 'We accept students as young as 4 years old in our Little Champions program.' },
    { question: 'Do you offer a free trial class?', answer: 'Yes — every new student gets a free introductory class with no obligation.' },
    { question: 'What style of martial arts do you teach?', answer: 'We teach traditional Shotokan karate with modern self-defense applications.' },
    { question: 'How often should my child attend class?', answer: 'We recommend 2-3 classes per week for consistent progress.' },
    { question: 'Do adults train separately from kids?', answer: 'Yes — we have dedicated adult classes in the evenings.' },
  ],
  heroPhotoUrl: karateSite.heroImage.url,
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
  businessType: 'martial arts',
  rawBusinessDescription: 'kids martial arts and self defense, Tulsa OK',
  toneHints: ['community', 'professional'],
  audienceHints: ['children', 'family'],
}

// ── Build pizza site ──

const pizzaVars: BVMSiteVariables = {
  businessName: "Tony's Pizza",
  ownerName: 'Tony Moretti',
  phone: '(918) 555-0422',
  email: 'order@tonyspizzatulsa.com',
  address: '3301 E 15th St',
  city: 'Tulsa',
  state: 'OK',
  zip: '74104',
  domain: 'tonyspizzatulsa.com',
  yearsInBusiness: '22',
  tagline: "Tulsa's Favorite New York Style Pizza Since 2004",
  heroHeadline: 'Real Pizza. Real Ingredients. Real New York.',
  cta: 'Order Now',
  aboutText: "Tony's Pizza has been serving authentic New York style pizza to Tulsa since 2004. Owner Tony Moretti brought his family's recipes straight from Brooklyn — hand-tossed dough made fresh every morning, house-made sauce from San Marzano tomatoes, and whole-milk mozzarella pulled daily. No shortcuts. No frozen anything. Just real pizza the way it's supposed to be made.",
  template: 'community',
  primaryColor: '#111111',
  secondaryColor: '#b51217',
  accentColor: '#ffffff',
  services: [
    {
      name: 'New York Style Pizza',
      description: 'Hand-tossed thin crust, house-made sauce, and whole-milk mozzarella. Available by the slice or whole pie.',
      photoUrl: pizzaSite.serviceImages[0]?.url || '',
    },
    {
      name: 'Calzones & Stromboli',
      description: 'Stuffed and baked to golden perfection with your choice of fillings — ricotta, pepperoni, sausage, veggies, and more.',
      photoUrl: pizzaSite.serviceImages[1]?.url || '',
    },
    {
      name: 'Delivery & Catering',
      description: 'Fast delivery across Tulsa and catering packages for parties, offices, and events of any size.',
      photoUrl: pizzaSite.serviceImages[2]?.url || '',
    },
  ],
  faqs: [
    { question: 'Do you deliver?', answer: 'Yes — we deliver across the Tulsa metro. Order online or call.' },
    { question: 'Can I order by the slice?', answer: 'Absolutely. Slices are available all day during operating hours.' },
    { question: 'Do you offer gluten-free crust?', answer: 'Yes — we have a gluten-free option available for any pizza.' },
    { question: 'Do you cater events?', answer: 'Yes — we offer catering packages for parties of 10 to 200+.' },
    { question: 'What are your hours?', answer: 'Monday-Thursday 11am-10pm, Friday-Saturday 11am-12am, Sunday 12pm-9pm.' },
  ],
  heroPhotoUrl: pizzaSite.heroImage.url,
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
  seoStatus: 'indexed',
  businessType: 'pizza',
  rawBusinessDescription: 'New York style pizza and takeout, Tulsa OK',
  toneHints: ['community'],
  audienceHints: ['family'],
}

// ── Generate HTML files ──

const communityTemplate = loadTemplate('community')

const karateResult = injectVariables(communityTemplate, karateVars)
const karateOut = path.join(__dirname, 'preview-karate.html')
fs.writeFileSync(karateOut, karateResult.html, 'utf-8')
console.log(`✓ ${karateOut} (${(karateResult.html.length / 1024).toFixed(1)} KB)`)
console.log(`  sectionCopy.aboutEyebrow: ${karateResult.normalized.sectionCopy.aboutEyebrow}`)
console.log(`  sectionCopy.whyHeadline:  ${karateResult.normalized.sectionCopy.whyHeadline}`)
console.log(`  sectionCopy.servicesLabel: ${karateResult.normalized.sectionCopy.servicesLabel}`)

const pizzaResult = injectVariables(communityTemplate, pizzaVars)
const pizzaOut = path.join(__dirname, 'preview-pizza.html')
fs.writeFileSync(pizzaOut, pizzaResult.html, 'utf-8')
console.log(`✓ ${pizzaOut} (${(pizzaResult.html.length / 1024).toFixed(1)} KB)`)
console.log(`  sectionCopy.aboutEyebrow: ${pizzaResult.normalized.sectionCopy.aboutEyebrow}`)
console.log(`  sectionCopy.whyHeadline:  ${pizzaResult.normalized.sectionCopy.whyHeadline}`)
console.log(`  sectionCopy.servicesLabel: ${pizzaResult.normalized.sectionCopy.servicesLabel}`)
