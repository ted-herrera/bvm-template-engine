export interface BVMSiteVariables {
  businessName: string
  ownerName: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  domain: string
  yearsInBusiness: string
  tagline: string
  heroHeadline: string
  cta: string
  aboutText: string
  template: 'local' | 'community' | 'premier'
  primaryColor: string
  secondaryColor: string
  accentColor: string
  services: Array<{ name: string; description: string; photoUrl: string }>
  faqs: Array<{ question: string; answer: string }>
  heroPhotoUrl: string
  pricingTier: 'good' | 'better' | 'best'
  monthlyPrice: string
  setupFee: string
  pricingLabel: string
  pricingFeatures: string[]
  seoStatus: 'not-submitted' | 'submitted' | 'indexed'
  businessType: string
  rawBusinessDescription?: string
  toneHints?: string[]
  audienceHints?: string[]
}
