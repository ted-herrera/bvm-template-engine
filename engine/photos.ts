export interface PhotoSet {
  hero: string
  services: string[]
}

const PHOTO_MAP: Record<string, PhotoSet> = {
  // ── Landscaping / Lawn ── verified
  landscaping: {
    hero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600',
    services: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800',
    ],
  },
  // ── Roofing ── verified
  roofing: {
    hero: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3a?w=1600',
    services: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      'https://images.unsplash.com/photo-1558618047-f4e90fca3ed9?w=800',
    ],
  },
  // ── Legal / Law ── verified
  legal: {
    hero: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600',
    services: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800',
      'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800',
    ],
  },
  // ── Restaurant ── dining room, plated food, bar interior
  restaurant: {
    hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600',
    services: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    ],
  },
  // ── Plumbing ── pipe wrench work, sink repair, water heater
  plumbing: {
    hero: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1600',
    services: [
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800',
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800',
    ],
  },
  // ── HVAC ── AC unit, technician, ductwork
  hvac: {
    hero: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600',
    services: [
      'https://images.unsplash.com/photo-1631545806609-e5e8e4693817?w=800',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
      'https://images.unsplash.com/photo-1631545806609-e5e8e4693817?w=800',
    ],
  },
  // ── Electrical ── wiring, panel, electrician at work
  electrical: {
    hero: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600',
    services: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
    ],
  },
  // ── Dental ── dental chair, dentist treating patient, smile
  dental: {
    hero: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600',
    services: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800',
    ],
  },
  // ── Cleaning ── person cleaning, spray bottle, clean kitchen
  cleaning: {
    hero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600',
    services: [
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800',
      'https://images.unsplash.com/photo-1527515637462-cee1b7d8bbf9?w=800',
    ],
  },
  // ── Auto / Mechanic ── engine bay, mechanic tools, car lift
  auto: {
    hero: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600',
    services: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
      'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
    ],
  },
  // ── Gym ── weight room, dumbbells, training floor
  gym: {
    hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600',
    services: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800',
    ],
  },
  // ── Yoga ── yoga pose, studio, meditation
  yoga: {
    hero: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600',
    services: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800',
      'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800',
    ],
  },
  // ── Martial Arts ── dojo, karate kick, sparring
  martial_arts: {
    hero: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600',
    services: [
      'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=800',
      'https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=800',
      'https://images.unsplash.com/photo-1514050566906-8d077bae7046?w=800',
    ],
  },
  // ── Pest Control ── exterminator spraying, pest treatment, protective gear
  pest_control: {
    hero: 'https://images.unsplash.com/photo-1632935190605-828e5a31a4e5?w=1600',
    services: [
      'https://images.unsplash.com/photo-1632935190605-828e5a31a4e5?w=800',
      'https://images.unsplash.com/photo-1632935190605-828e5a31a4e5?w=800',
      'https://images.unsplash.com/photo-1632935190605-828e5a31a4e5?w=800',
    ],
  },
  // ── Accounting ── calculator, spreadsheet, financial documents
  accounting: {
    hero: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600',
    services: [
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
    ],
  },
  // ── Real Estate ── house exterior, for sale sign, neighborhood
  real_estate: {
    hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600',
    services: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    ],
  },
  // ── Insurance ── umbrella protection, family, documents
  insurance: {
    hero: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600',
    services: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    ],
  },
  // ── Garage Door ── residential garage, door mechanism, home exterior
  garage_door: {
    hero: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1600',
    services: [
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800',
    ],
  },
  // ── Pool ── swimming pool, blue water, pool maintenance
  pool: {
    hero: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1600',
    services: [
      'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800',
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800',
    ],
  },
  // ── Solar ── solar panels on roof, solar array, installation
  solar: {
    hero: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600',
    services: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
    ],
  },
  // ── Security ── security camera, alarm panel, monitoring
  security: {
    hero: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1600',
    services: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
    ],
  },
  // ── Remodeling ── kitchen remodel, bathroom renovation, construction
  remodeling: {
    hero: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600',
    services: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    ],
  },
  // ── Handyman ── tools, home repair, fixing things
  handyman: {
    hero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600',
    services: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    ],
  },
  // ── Gutters ── gutter on house, rain gutter, gutter cleaning
  gutters: {
    hero: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3a?w=1600',
    services: [
      'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3a?w=800',
      'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3a?w=800',
      'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3a?w=800',
    ],
  },
  // ── Junk Removal ── dumpster, debris hauling, cleanup
  junk_removal: {
    hero: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600',
    services: [
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800',
    ],
  },
  // ── Moving ── moving boxes, truck, relocation
  moving: {
    hero: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=1600',
    services: [
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800',
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800',
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800',
    ],
  },
  // ── Restoration ── water damage, restoration work, repair
  restoration: {
    hero: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600',
    services: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    ],
  },
  // ── Retail ── store interior, retail display, shopping
  retail: {
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600',
    services: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
    ],
  },
  // ── Photography ── camera, photographer shooting, photo session
  photography: {
    hero: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600',
    services: [
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800',
    ],
  },
  // ── Barber ── barbershop chair, fade cut, shaving
  barber: {
    hero: 'https://images.unsplash.com/photo-1503951914875-452f4aca7490?w=1600',
    services: [
      'https://images.unsplash.com/photo-1585747860019-8e69a67d3073?w=800',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800',
    ],
  },
  // ── Nails ── manicure, nail art, nail salon
  nails: {
    hero: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600',
    services: [
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    ],
  },
  // ── Beauty / Spa ── facial treatment, spa, skincare
  beauty: {
    hero: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1600',
    services: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800',
    ],
  },
  // ── Physical Therapy ── therapist treating patient, rehab, exercise
  physical_therapy: {
    hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600',
    services: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    ],
  },
  // ── Counseling ── therapist office, conversation, supportive
  counseling: {
    hero: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600',
    services: [
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
      'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800',
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800',
    ],
  },
  // ── Veterinary ── vet with dog, clinic, pet care
  veterinary: {
    hero: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600',
    services: [
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800',
    ],
  },
  // ── Salon ── hair styling, salon chair, stylist
  salon: {
    hero: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600',
    services: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    ],
  },
  // ── Education ── classroom, students, learning
  education: {
    hero: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600',
    services: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    ],
  },
  // ── Fitness (pilates, etc.) ── studio, reformer, stretch
  fitness: {
    hero: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600',
    services: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800',
    ],
  },
  // ── CrossFit ── box jumps, barbell, WOD
  crossfit: {
    hero: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1600',
    services: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800',
    ],
  },
  // ── Pilates ── reformer, mat work, studio
  pilates: {
    hero: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600',
    services: [
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
    ],
  },
  // ── Boxing ── heavy bag, boxing ring, gloves
  boxing: {
    hero: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600',
    services: [
      'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800',
      'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800',
    ],
  },
  // ── Urgent Care ── medical facility, doctor, treatment room
  urgent_care: {
    hero: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600',
    services: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    ],
  },
  // ── Pediatrics ── pediatrician, child patient, family medicine
  pediatrics: {
    hero: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600',
    services: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
    ],
  },
  // ── Painting ── paint roller, wall painting, house painting
  painting: {
    hero: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600',
    services: [
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
    ],
  },
  // ── Chiropractic ── spine adjustment, wellness, treatment
  chiropractic: {
    hero: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600',
    services: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    ],
  },
  // ── Default fallback ── modern office, professional workspace
  default: {
    hero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
    services: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    ],
  },
}

export function getPhotos(category: string): PhotoSet {
  return PHOTO_MAP[category] || PHOTO_MAP['default']
}

export function hasCategory(category: string): boolean {
  return category in PHOTO_MAP
}
