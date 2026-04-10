// ── Subtype classification ──
// Every business type resolves to a specific subtype, never null.

export interface ClassificationResult {
  primaryCategory: string
  subtype: string
  matchedTerm: string
  confidence: 'exact' | 'fuzzy' | 'parent'
}

// Longest phrases first within each group for greedy matching
const SUBTYPE_RULES: Array<[RegExp, string, string]> = [
  // ── Food subtypes (multi-word first) ──
  [/\b(smash burger)\b/i, 'restaurant', 'burger'],
  [/\b(mexican food|tex[- ]?mex)\b/i, 'restaurant', 'taco_mexican'],
  [/\b(japanese food)\b/i, 'restaurant', 'japanese_food'],
  [/\b(baked goods)\b/i, 'restaurant', 'bakery'],
  [/\b(coffee shop)\b/i, 'restaurant', 'coffee_cafe'],
  // Specific food subtypes BEFORE generic takeout so "pizza and takeout" → pizza
  [/\b(pizza|pizzeria)\b/i, 'restaurant', 'pizza'],
  [/\b(burger|burgers)\b/i, 'restaurant', 'burger'],
  [/\b(taco|tacos)\b/i, 'restaurant', 'taco_mexican'],
  [/\b(bbq|barbecue|smokehouse)\b/i, 'restaurant', 'bbq'],
  [/\b(sushi|ramen)\b/i, 'restaurant', 'japanese_food'],
  [/\b(sandwich|sub|deli)\b/i, 'restaurant', 'sandwich_deli'],
  [/\b(bakery|pastry)\b/i, 'restaurant', 'bakery'],
  [/\b(coffee|cafe|espresso)\b/i, 'restaurant', 'coffee_cafe'],
  [/\b(bar|pub|brewery|taproom)\b/i, 'restaurant', 'bar_brewery'],
  // Generic takeout/restaurant AFTER all specific food subtypes
  [/\b(take[- ]?out|carry[- ]?out|carryout|to[- ]?go)\b/i, 'restaurant', 'food_takeout'],
  [/\b(restaurant|dining|eatery)\b/i, 'restaurant', 'restaurant'],

  // ── Martial arts (before gym so "karate" doesn't fall to fitness) ──
  [/\b(self[- ]?defense)\b/i, 'martial_arts', 'martial_arts'],
  [/\b(jiu[- ]?jitsu|bjj)\b/i, 'martial_arts', 'martial_arts'],
  [/\b(tae[- ]?kwon[- ]?do)\b/i, 'martial_arts', 'martial_arts'],
  [/\b(karate)\b/i, 'martial_arts', 'martial_arts'],
  [/\b(judo)\b/i, 'martial_arts', 'martial_arts'],
  [/\b(mma)\b/i, 'martial_arts', 'martial_arts'],
  [/\b(martial arts?)\b/i, 'martial_arts', 'martial_arts'],

  // ── Dance ──
  [/\b(dance studio|dance class)\b/i, 'education', 'dance_studio'],
  [/\b(dance|ballet)\b/i, 'education', 'dance_studio'],

  // ── Fitness / Yoga / Pilates ──
  [/\b(personal training)\b/i, 'gym', 'gym_fitness'],
  [/\b(crossfit|weightlifting)\b/i, 'gym', 'gym_fitness'],
  [/\b(gym|fitness)\b/i, 'gym', 'gym_fitness'],
  [/\b(yoga|pilates|barre)\b/i, 'fitness', 'yoga_pilates'],

  // ── Health / Medical ──
  [/\b(urgent care)\b/i, 'medical', 'medical_clinic'],
  [/\b(orthodontist)\b/i, 'dental', 'dental'],
  [/\b(dental|dentist)\b/i, 'dental', 'dental'],
  [/\b(chiropractic|chiropractor)\b/i, 'chiropractic', 'chiropractic'],
  [/\b(medical|clinic|doctor)\b/i, 'medical', 'medical_clinic'],

  // ── Beauty / Wellness ──
  [/\b(hair salon)\b/i, 'salon', 'salon_barber'],
  [/\b(barber ?shop)\b/i, 'barber', 'salon_barber'],
  [/\b(salon|barber)\b/i, 'salon', 'salon_barber'],
  [/\b(nail salon|nails)\b/i, 'beauty', 'spa_wellness'],
  [/\b(spa|massage)\b/i, 'beauty', 'spa_wellness'],

  // ── Home services ──
  [/\b(roof repair)\b/i, 'roofing', 'roofing'],
  [/\b(roofing|roofer)\b/i, 'roofing', 'roofing'],
  [/\b(plumbing|plumber)\b/i, 'plumbing', 'plumbing'],
  [/\b(air conditioning)\b/i, 'hvac', 'hvac'],
  [/\b(hvac|heating|cooling)\b/i, 'hvac', 'hvac'],
  [/\b(lawn care|lawn service|yard work)\b/i, 'landscaping', 'landscaping'],
  [/\b(landscaping)\b/i, 'landscaping', 'landscaping'],
  [/\b(house cleaning|maid service|janitorial)\b/i, 'cleaning', 'cleaning'],
  [/\b(cleaning)\b/i, 'cleaning', 'cleaning'],
  [/\b(auto repair|car repair|auto shop)\b/i, 'auto', 'auto_repair'],
  [/\b(mechanic)\b/i, 'auto', 'auto_repair'],

  // ── Professional services ──
  [/\b(real estate|realtor|property)\b/i, 'real_estate', 'real_estate'],
  [/\b(law firm)\b/i, 'legal', 'law'],
  [/\b(law|lawyer|attorney|legal)\b/i, 'legal', 'law'],
  [/\b(accounting|accountant|cpa|tax)\b/i, 'accounting', 'accounting'],
  [/\b(insurance)\b/i, 'insurance', 'insurance'],

  // ── Education / Childcare ──
  [/\b(learning center|test prep)\b/i, 'education', 'tutoring'],
  [/\b(tutoring|education)\b/i, 'education', 'tutoring'],
  [/\b(daycare|childcare|preschool)\b/i, 'education', 'childcare'],

  // ── Other ──
  [/\b(dog grooming|pet grooming)\b/i, 'veterinary', 'pet_services'],
  [/\b(pet|veterinary|vet)\b/i, 'veterinary', 'pet_services'],
  [/\b(photo studio)\b/i, 'photography', 'photography'],
  [/\b(photography|photographer)\b/i, 'photography', 'photography'],
  [/\b(florist|flowers|floral)\b/i, 'retail', 'florist'],
  [/\b(jewelry|jeweler)\b/i, 'retail', 'jewelry'],
  [/\b(boutique|clothing|apparel)\b/i, 'retail', 'retail_boutique'],
]

// Parent category fallback map
const PARENT_SUBTYPES: Record<string, string> = {
  restaurant: 'restaurant',
  martial_arts: 'martial_arts',
  gym: 'gym_fitness',
  fitness: 'yoga_pilates',
  dental: 'dental',
  chiropractic: 'chiropractic',
  medical: 'medical_clinic',
  salon: 'salon_barber',
  barber: 'salon_barber',
  beauty: 'spa_wellness',
  roofing: 'roofing',
  plumbing: 'plumbing',
  hvac: 'hvac',
  landscaping: 'landscaping',
  cleaning: 'cleaning',
  auto: 'auto_repair',
  real_estate: 'real_estate',
  legal: 'law',
  accounting: 'accounting',
  insurance: 'insurance',
  education: 'tutoring',
  veterinary: 'pet_services',
  photography: 'photography',
  retail: 'retail_boutique',
}

export function classifyBusiness(
  businessType: string,
  rawDescription?: string,
): ClassificationResult {
  const combined = [rawDescription || '', businessType || '']
    .join(' ')
    .toLowerCase()
    .replace(/[^\w\s\/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  // 1. Try subtype rules (longest match first by array order)
  for (const [pattern, category, subtype] of SUBTYPE_RULES) {
    const match = combined.match(pattern)
    if (match) {
      return {
        primaryCategory: category,
        subtype,
        matchedTerm: match[0],
        confidence: 'exact',
      }
    }
  }

  // 2. Try businessType directly as a parent category key
  const directKey = (businessType || '').toLowerCase().replace(/\s+/g, '_').trim()
  if (directKey && PARENT_SUBTYPES[directKey]) {
    return {
      primaryCategory: directKey,
      subtype: PARENT_SUBTYPES[directKey],
      matchedTerm: businessType || '',
      confidence: 'parent',
    }
  }

  // 3. Fallback — always populate subtype
  return {
    primaryCategory: 'default',
    subtype: 'default',
    matchedTerm: combined.slice(0, 40) || 'unknown',
    confidence: 'fuzzy',
  }
}
