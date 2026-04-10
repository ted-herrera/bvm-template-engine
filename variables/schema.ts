export interface BVMSiteVariables {
  businessName: string
  ownerName: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  yearsInBusiness: string
  tagline: string
  heroHeadline: string
  cta: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  services: Array<{
    name: string
    description: string
    photoUrl: string
  }>
  aboutText: string
  faqs: Array<{ question: string; answer: string }>
  heroPhotoUrl: string
  template: 'local' | 'community' | 'premier'
  businessType: string
  domain: string
  domainStatus: 'confirmed' | 'needs-help' | 'pending'
  seoStatus: 'not-submitted' | 'submitted' | 'indexed'
}
