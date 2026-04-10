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

// Default service suggestions per subtype — used when no custom services provided
const DEFAULT_SERVICES: Record<string, Array<{ name: string; description: string }>> = {
  martial_arts: [
    { name: 'Private Lessons', description: 'One-on-one instruction tailored to your skill level and goals.' },
    { name: 'Group Classes', description: 'Structured group training for all ages and belt levels.' },
    { name: 'Belt Testing & Promotions', description: 'Official belt testing ceremonies recognizing student progress and achievement.' },
    { name: 'Self Defense Training', description: 'Practical self-defense techniques for real-world confidence and safety.' },
    { name: 'After School Program', description: 'Supervised after-school martial arts training with homework time and character development.' },
  ],
  pizza: [
    { name: 'Signature Pizzas', description: 'Hand-tossed pies made with fresh dough, house sauce, and premium toppings.' },
    { name: 'Calzones & Stromboli', description: 'Stuffed and baked to golden perfection with your choice of fillings.' },
    { name: 'Delivery & Catering', description: 'Fast delivery and catering packages for parties and events of any size.' },
  ],
  roofing: [
    { name: 'Roof Replacement', description: 'Full roof replacements using premium materials with manufacturer warranties.' },
    { name: 'Storm Damage Repair', description: 'Fast emergency response for hail, wind, and storm damage repairs.' },
    { name: 'Roof Inspection', description: 'Comprehensive inspections with detailed reports for homeowners and buyers.' },
  ],
  landscaping: [
    { name: 'Lawn Maintenance', description: 'Weekly mowing, edging, trimming, and seasonal fertilization.' },
    { name: 'Landscape Design', description: 'Custom landscape design and installation for your outdoor space.' },
    { name: 'Irrigation Systems', description: 'Smart watering systems that save water and keep your lawn healthy.' },
  ],
  law: [
    { name: 'Legal Consultation', description: 'Free initial consultation to discuss your case and legal options.' },
    { name: 'Case Representation', description: 'Aggressive representation in court to protect your rights and interests.' },
    { name: 'Document Preparation', description: 'Professional preparation of contracts, wills, and legal documents.' },
  ],
  dental: [
    { name: 'General Dentistry', description: 'Comprehensive dental care including cleanings, exams, and fillings.' },
    { name: 'Cosmetic Dentistry', description: 'Whitening, veneers, and smile makeovers for a confident smile.' },
    { name: 'Emergency Dental Care', description: 'Same-day appointments for dental emergencies and urgent pain relief.' },
  ],
  gym_fitness: [
    { name: 'Personal Training', description: 'One-on-one sessions with certified trainers tailored to your goals.' },
    { name: 'Group Fitness Classes', description: 'High-energy group workouts including HIIT, strength, and cardio.' },
    { name: 'Open Gym Access', description: 'Full access to modern equipment, free weights, and cardio machines.' },
  ],
}

/**
 * Get default service suggestions for a subtype.
 * Returns up to `count` services. Empty array if no defaults exist.
 */
export function getDefaultServices(
  subtype: string,
  count = 3,
): Array<{ name: string; description: string }> {
  const services = DEFAULT_SERVICES[subtype] || DEFAULT_SERVICES['default'] || []
  return services.slice(0, count)
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
