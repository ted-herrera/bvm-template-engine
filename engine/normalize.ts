import { getPhotos, hasCategory } from './photos'
import { SECTION_COPY_MAP, SectionCopy } from './sectionCopy'

// ── Canonical enums ──

export type ServiceMode =
  | 'takeout' | 'delivery' | 'dine_in' | 'catering'
  | 'on_site' | 'in_home' | 'emergency' | 'urgent'
  | 'mobile' | 'appointment'

export type BrandTone =
  | 'premium' | 'community' | 'professional' | 'authority'

export interface NormalizedBusiness {
  rawInput: string
  primaryCategory: string
  subtype: string
  secondaryCategory: string
  matchedSignals: string[]
  serviceMode: ServiceMode[]
  audience: string[]
  brandTone: BrandTone[]
  modifiers: string[]
  heroPhotoUrl: string
  servicePhotoUrls: string[]
  sectionCopy: SectionCopy
  debugReport: {
    matchedPhrase: string
    resolvedCategory: string
    photosBucket: string
    reasoning: string
  }
}

// ── Service mode normalization ──

const SERVICE_MODE_MAP: Array<[RegExp, ServiceMode]> = [
  [/\b(carryout|pickup|curbside|order ahead|carry out)\b/i, 'takeout'],
  [/\b(dine[- ]?in|eat[- ]?in|reservation)\b/i, 'dine_in'],
  [/\b(deliver(?:ed|y)|order online|door delivery)\b/i, 'delivery'],
  [/\b(cater(?:ing|ed)?)\b/i, 'catering'],
  [/\b(same[- ]?day|24[- ]?hour|24\/7)\b/i, 'urgent'],
  [/\b(in[- ]?home|house call|on[- ]?location)\b/i, 'in_home'],
  [/\b(emergency)\b/i, 'emergency'],
  [/\b(on[- ]?site)\b/i, 'on_site'],
  [/\b(mobile)\b/i, 'mobile'],
  [/\b(appointment|by appointment)\b/i, 'appointment'],
]

// ── Tone normalization ──

const TONE_MAP: Array<[RegExp, BrandTone]> = [
  [/\b(luxury|upscale|boutique|elite|premium)\b/i, 'premium'],
  [/\b(family[- ]?owned|locally[- ]?owned|neighborhood|affordable|community)\b/i, 'community'],
  [/\b(certified|licensed|experienced|expert|professional)\b/i, 'professional'],
  [/\b(aggressive|results|proven|authority)\b/i, 'authority'],
]

// ── Audience detection ──

const AUDIENCE_MAP: Array<[RegExp, string]> = [
  [/\b(kids?|children|youth|teens?|students?)\b/i, 'children'],
  [/\b(senior|elderly|aging|retirement)\b/i, 'seniors'],
  [/\b(family|families|household)\b/i, 'family'],
  [/\b(women|female|ladies|moms?)\b/i, 'women'],
  [/\b(men|male|guys|dads?)\b/i, 'men'],
  [/\b(adults?|professionals?)\b/i, 'adults'],
  [/\b(pets?|dogs?|cats?|animals?)\b/i, 'pets'],
  [/\b(homeowners?|property owners?)\b/i, 'homeowners'],
  [/\b(commercial|business(?:es)?|corporate)\b/i, 'commercial'],
  [/\b(residential)\b/i, 'residential'],
]

// ── Modifier detection ──

const MODIFIER_PATTERNS: Array<[RegExp, string]> = [
  [/\b(repair)\b/i, 'repair'],
  [/\b(install(?:ation)?)\b/i, 'install'],
  [/\b(emergency)\b/i, 'emergency'],
  [/\b(commercial)\b/i, 'commercial'],
  [/\b(residential)\b/i, 'residential'],
  [/\b(cosmetic)\b/i, 'cosmetic'],
  [/\b(organic)\b/i, 'organic'],
  [/\b(custom)\b/i, 'custom'],
  [/\b(luxury)\b/i, 'luxury'],
  [/\b(mobile)\b/i, 'mobile'],
]

// ── Synonym map — multi-word phrases first, longest match wins ──

const SYNONYM_MAP: Array<[RegExp, string, string]> = [
  // Multi-word phrases first (longest match wins)
  [/\bdance studio\b/i, 'education', 'dance'],
  [/\bmusic lesson/i, 'education', 'music'],
  [/\bpilates studio\b/i, 'fitness', 'pilates'],
  [/\bboxing gym\b/i, 'gym', 'boxing'],
  [/\bjiu[- ]?jitsu\b/i, 'martial_arts', 'jiu_jitsu'],
  [/\btae[- ]?kwon[- ]?do\b/i, 'martial_arts', 'taekwondo'],
  [/\bkung[- ]?fu\b/i, 'martial_arts', 'kung_fu'],
  [/\bmma\b/i, 'martial_arts', 'mma'],
  [/\bkick[- ]?boxing\b/i, 'martial_arts', 'kickboxing'],
  [/\bself[- ]?defense\b/i, 'martial_arts', 'self_defense'],
  [/\bjunk removal\b/i, 'junk_removal', ''],
  [/\bgarage door/i, 'garage_door', ''],
  [/\bpest control\b/i, 'pest_control', ''],
  [/\breal estate\b/i, 'real_estate', ''],
  [/\bphysical therapy\b/i, 'physical_therapy', ''],
  [/\burgent care\b/i, 'urgent_care', ''],
  [/\bnail salon\b/i, 'nails', ''],
  [/\bhair salon\b/i, 'salon', ''],
  [/\bbarbershop\b/i, 'barber', ''],
  [/\bbarber shop\b/i, 'barber', ''],
  [/\bbeauty salon\b/i, 'beauty', ''],
  [/\bmed[- ]?spa\b/i, 'beauty', 'med_spa'],
  [/\bdog grooming\b/i, 'veterinary', 'grooming'],
  [/\bveterinar(?:y|ian)\b/i, 'veterinary', ''],
  [/\bvet clinic\b/i, 'veterinary', ''],
  [/\bfamily law\b/i, 'legal', 'family_law'],
  [/\bcriminal (?:law|defense)\b/i, 'legal', 'criminal_law'],
  [/\bcorporate law\b/i, 'legal', 'corporate_law'],
  [/\bpersonal injury\b/i, 'legal', 'personal_injury'],
  [/\bestate planning\b/i, 'legal', 'estate_planning'],
  [/\bstorm damage\b/i, 'roofing', 'storm_damage'],
  [/\broof(?:ing)?\b/i, 'roofing', ''],
  [/\blandscap(?:ing|er)\b/i, 'landscaping', ''],
  [/\blawn care\b/i, 'landscaping', 'lawn_care'],
  [/\blawn maintenance\b/i, 'landscaping', 'lawn_care'],
  [/\btree (?:service|removal|trimming)\b/i, 'landscaping', 'tree_service'],
  [/\birrigation\b/i, 'landscaping', 'irrigation'],
  [/\brestaurant\b/i, 'restaurant', ''],
  [/\bpizza\b/i, 'restaurant', 'pizza'],
  [/\bsushi\b/i, 'restaurant', 'sushi'],
  [/\bbakery\b/i, 'restaurant', 'bakery'],
  [/\bcoffee shop\b/i, 'restaurant', 'coffee'],
  [/\bcafe\b/i, 'restaurant', 'cafe'],
  [/\bbar & grill\b/i, 'restaurant', 'bar_grill'],
  [/\bplumb(?:ing|er)\b/i, 'plumbing', ''],
  [/\bhvac\b/i, 'hvac', ''],
  [/\bair conditioning\b/i, 'hvac', 'ac'],
  [/\bheating and cooling\b/i, 'hvac', ''],
  [/\belectrician\b/i, 'electrical', ''],
  [/\belectrical\b/i, 'electrical', ''],
  [/\bdentist(?:ry)?\b/i, 'dental', ''],
  [/\bdental\b/i, 'dental', ''],
  [/\borthodont/i, 'dental', 'orthodontics'],
  [/\bclean(?:ing|ers?)\b/i, 'cleaning', ''],
  [/\bmaid\b/i, 'cleaning', 'maid'],
  [/\bjanitorial\b/i, 'cleaning', 'janitorial'],
  [/\bpressure wash/i, 'cleaning', 'pressure_washing'],
  [/\bauto (?:repair|mechanic|body|shop)\b/i, 'auto', ''],
  [/\bmechanic\b/i, 'auto', ''],
  [/\btire\b/i, 'auto', 'tires'],
  [/\boil change\b/i, 'auto', 'oil_change'],
  [/\bgym\b/i, 'gym', ''],
  [/\bcrossfit\b/i, 'gym', 'crossfit'],
  [/\byoga\b/i, 'yoga', ''],
  [/\bpilates\b/i, 'fitness', 'pilates'],
  [/\bkarate\b/i, 'martial_arts', 'karate'],
  [/\bmartial arts?\b/i, 'martial_arts', ''],
  [/\bboxing\b/i, 'gym', 'boxing'],
  [/\bphotograph(?:y|er)\b/i, 'photography', ''],
  [/\bbarber\b/i, 'barber', ''],
  [/\bnails?\b/i, 'nails', ''],
  [/\bbeauty\b/i, 'beauty', ''],
  [/\bspa\b/i, 'beauty', 'spa'],
  [/\bsalon\b/i, 'salon', ''],
  [/\bcounseling\b/i, 'counseling', ''],
  [/\btherapist\b/i, 'counseling', ''],
  [/\bpsycholog/i, 'counseling', 'psychology'],
  [/\bchiropractic\b/i, 'chiropractic', ''],
  [/\bchiropractor\b/i, 'chiropractic', ''],
  [/\bpediatric/i, 'pediatrics', ''],
  [/\baccounting\b/i, 'accounting', ''],
  [/\bcpa\b/i, 'accounting', ''],
  [/\btax\b/i, 'accounting', 'tax'],
  [/\bbookkeep/i, 'accounting', 'bookkeeping'],
  [/\binsurance\b/i, 'insurance', ''],
  [/\breal(?:ty| estate)\b/i, 'real_estate', ''],
  [/\bpool\b/i, 'pool', ''],
  [/\bsolar\b/i, 'solar', ''],
  [/\bsecurity\b/i, 'security', ''],
  [/\bremodel/i, 'remodeling', ''],
  [/\brenovation\b/i, 'remodeling', ''],
  [/\bkitchen\b/i, 'remodeling', 'kitchen'],
  [/\bbathroom\b/i, 'remodeling', 'bathroom'],
  [/\bhandyman\b/i, 'handyman', ''],
  [/\bgutter/i, 'gutters', ''],
  [/\bmoving\b/i, 'moving', ''],
  [/\bmover/i, 'moving', ''],
  [/\brestorat/i, 'restoration', ''],
  [/\bretail\b/i, 'retail', ''],
  [/\bpaint(?:ing|er)\b/i, 'painting', ''],
  [/\battorney\b/i, 'legal', ''],
  [/\blawyer\b/i, 'legal', ''],
  [/\blaw firm\b/i, 'legal', ''],
  [/\blaw\b/i, 'legal', ''],
  [/\btutor/i, 'education', 'tutoring'],
  [/\beducation/i, 'education', ''],
  [/\bfitness\b/i, 'fitness', ''],
]

// ── Nearest neighbor fallback ──

const NEAREST_NEIGHBOR: Record<string, string> = {
  spa: 'beauty',
  med_spa: 'beauty',
  wellness: 'yoga',
  massage: 'physical_therapy',
  personal_trainer: 'gym',
  daycare: 'education',
  preschool: 'education',
  grooming: 'veterinary',
  towing: 'auto',
  detailing: 'auto',
  flooring: 'remodeling',
  fencing: 'landscaping',
  tree_service: 'landscaping',
  window: 'cleaning',
  carpet: 'cleaning',
}

function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

export function normalize(
  businessType: string,
  rawDescription?: string,
  toneHints?: string[],
  audienceHints?: string[],
): NormalizedBusiness {
  // 1. Clean and combine
  const rawInput = [rawDescription || '', businessType || '']
    .join(' ')
    .toLowerCase()
    .replace(/[^\w\s\/&-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  // 2. Detect service modes
  const serviceMode: ServiceMode[] = []
  for (const [pattern, mode] of SERVICE_MODE_MAP) {
    if (pattern.test(rawInput)) {
      serviceMode.push(mode)
    }
  }

  // 3. Detect audience signals
  const audience: string[] = []
  for (const [pattern, aud] of AUDIENCE_MAP) {
    if (pattern.test(rawInput)) {
      audience.push(aud)
    }
  }
  if (Array.isArray(audienceHints)) {
    for (const hint of audienceHints) {
      if (hint && !audience.includes(hint.toLowerCase())) {
        audience.push(hint.toLowerCase())
      }
    }
  }

  // 4. Detect tone from raw input
  const brandTone: BrandTone[] = []
  for (const [pattern, tone] of TONE_MAP) {
    if (pattern.test(rawInput)) {
      brandTone.push(tone)
    }
  }

  // 5. Normalize and merge toneHints
  if (Array.isArray(toneHints)) {
    for (const hint of toneHints) {
      if (!hint) continue
      const lower = hint.toLowerCase().trim()
      for (const [pattern, canonical] of TONE_MAP) {
        if (pattern.test(lower)) {
          if (!brandTone.includes(canonical)) {
            brandTone.push(canonical)
          }
          break
        }
      }
    }
  }

  // 6. Multi-word synonym match (longest first — order in array)
  let primaryCategory = ''
  let subtype = ''
  let matchedPhrase = ''

  for (const [pattern, category, sub] of SYNONYM_MAP) {
    const match = rawInput.match(pattern)
    if (match) {
      primaryCategory = category
      subtype = sub
      matchedPhrase = match[0]
      break
    }
  }

  // 7. If no synonym match, check businessType directly in PHOTO_MAP
  if (!primaryCategory) {
    const directKey = (businessType || '').toLowerCase().replace(/\s+/g, '_').trim()
    if (directKey && hasCategory(directKey)) {
      primaryCategory = directKey
      matchedPhrase = businessType || ''
    }
  }

  // 8. Nearest neighbor, then default
  if (!primaryCategory) {
    const directKey = (businessType || '').toLowerCase().replace(/\s+/g, '_').trim()
    if (directKey && NEAREST_NEIGHBOR[directKey]) {
      primaryCategory = NEAREST_NEIGHBOR[directKey]
      matchedPhrase = businessType || ''
    }
  }
  if (!primaryCategory) {
    primaryCategory = 'default'
    matchedPhrase = rawInput.slice(0, 40) || 'unknown'
  }

  // 9. Secondary category and matched signals
  const matchedSignals: string[] = []
  let secondaryCategory = ''
  for (const [pattern, category] of SYNONYM_MAP) {
    if (category !== primaryCategory) {
      const match = rawInput.match(pattern)
      if (match) {
        if (!secondaryCategory) {
          secondaryCategory = category
        }
        matchedSignals.push(match[0])
      }
    }
  }

  // 10. Extract modifiers
  const modifiers: string[] = []
  for (const [pattern, mod] of MODIFIER_PATTERNS) {
    if (pattern.test(rawInput)) {
      modifiers.push(mod)
    }
  }

  // 11. Get photos via getPhotos(primaryCategory) only
  const photos = getPhotos(primaryCategory)
  const heroPhotoUrl = photos.hero
  const servicePhotoUrls = photos.services

  // 12. Resolve sectionCopy with brandTone modifiers
  const baseCopy = SECTION_COPY_MAP[primaryCategory] || SECTION_COPY_MAP['default']
  const sectionCopy: SectionCopy = JSON.parse(JSON.stringify(baseCopy))

  const uniqueTones = unique(brandTone)
  if (uniqueTones.includes('premium')) {
    for (const key of Object.keys(sectionCopy) as Array<keyof SectionCopy>) {
      const val = sectionCopy[key]
      if (typeof val === 'string') {
        (sectionCopy as any)[key] = val.replace(/\baffordable\b/gi, 'exceptional')
      }
    }
    sectionCopy.trustBadges = sectionCopy.trustBadges.map(
      (b) => b.replace(/\baffordable\b/gi, 'exceptional'),
    ) as [string, string, string, string]
  }
  if (uniqueTones.includes('authority')) {
    if (!/^(get|call|schedule|protect|start|secure|book|contact|act|claim|demand|fight)\b/i.test(sectionCopy.ctaHeadline)) {
      sectionCopy.ctaHeadline = 'Act Now — ' + sectionCopy.ctaHeadline
    }
  }
  if (uniqueTones.includes('community')) {
    const hasLocal = sectionCopy.trustBadges.some(
      (b) => /locally owned|neighborhood/i.test(b),
    )
    if (!hasLocal) {
      sectionCopy.trustBadges[3] = 'Locally Owned & Operated'
    }
  }

  // 13. Build debug report
  const reasoning = primaryCategory === 'default'
    ? `No category match found for "${rawInput.slice(0, 60)}"; using default photos.`
    : `Matched "${matchedPhrase}" → category "${primaryCategory}"${subtype ? ` (subtype: ${subtype})` : ''} with ${uniqueTones.length ? uniqueTones.join('+') : 'neutral'} tone.`

  return {
    rawInput,
    primaryCategory,
    subtype,
    secondaryCategory,
    matchedSignals: unique(matchedSignals),
    serviceMode: unique(serviceMode),
    audience: unique(audience),
    brandTone: uniqueTones,
    modifiers: unique(modifiers),
    heroPhotoUrl,
    servicePhotoUrls,
    sectionCopy,
    debugReport: {
      matchedPhrase,
      resolvedCategory: primaryCategory + (subtype ? `/${subtype}` : ''),
      photosBucket: primaryCategory,
      reasoning,
    },
  }
}
