// ── Studio Engine ──
// Image selection happens at intake time. Templates are dumb about images.
// Zero Unsplash calls at render time.

import { classifyBusiness, ClassificationResult } from './business-classifier'
import { selectHeroImage, selectServiceImages, PhotoAsset } from './photo-library'

export interface HeroImage {
  url: string
  id: string
  subtype: string
  tags: string[]
}

export interface SitePayload {
  siteId: string
  businessName: string
  businessType: string
  rawDescription?: string
  heroImage: HeroImage
  serviceImages: HeroImage[]
  classification: ClassificationResult
  escalate: boolean
}

/**
 * Resolve all images at intake time and stamp into site payload.
 * The template engine reads site.heroImage.url — that is all.
 *
 * @throws Error if heroImage cannot be resolved (missing pool = hard error)
 */
export function resolveImagesAtIntake(
  siteId: string,
  businessName: string,
  businessType: string,
  rawDescription?: string,
  serviceCount = 3,
): SitePayload {
  // 1. Classify the business
  const classification = classifyBusiness(businessType, rawDescription)

  // 2. Select hero image deterministically from curated pool
  const heroResult = selectHeroImage(classification.subtype, siteId)

  if (heroResult.escalate) {
    // Pool was empty for this subtype AND parent — this is an error condition.
    // We still return a payload but flag for escalation.
    console.error(
      `[studio-engine] ESCALATE: No curated hero pool for subtype "${classification.subtype}" (site: ${siteId})`,
    )
  }

  const heroImage: HeroImage = {
    url: heroResult.url,
    id: heroResult.id,
    subtype: heroResult.subtype,
    tags: heroResult.tags,
  }

  // 3. Select service images
  const serviceAssets = selectServiceImages(
    classification.subtype,
    serviceCount,
    siteId,
  )
  const serviceImages: HeroImage[] = serviceAssets.map((asset: PhotoAsset) => ({
    url: asset.url,
    id: asset.id,
    subtype: asset.subtype,
    tags: asset.tags,
  }))

  return {
    siteId,
    businessName,
    businessType,
    rawDescription,
    heroImage,
    serviceImages,
    classification,
    escalate: heroResult.escalate,
  }
}

/**
 * Validate that a site payload has a resolved hero image.
 * Templates must never render without one.
 *
 * @throws Error if heroImage is missing
 */
export function requireHeroImage(payload: SitePayload): void {
  if (!payload.heroImage || !payload.heroImage.url) {
    throw new Error(
      `[studio-engine] HARD ERROR: site "${payload.siteId}" has no heroImage. ` +
      `Classification: ${payload.classification.subtype}. ` +
      `Images must be resolved at intake time — do not render without them.`,
    )
  }
}
