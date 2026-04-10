export interface PhotoSet {
  hero: string
  services: string[]
}

export interface PhotoAsset {
  id: string
  url: string
  subtype: string
  tags: string[]
  heroReady: boolean
  approved: boolean
}

function asset(id: string, subtype: string, tags: string[], heroReady = true): PhotoAsset {
  return {
    id,
    url: `https://images.unsplash.com/photo-${id}?w=1600&auto=format&fit=crop`,
    subtype,
    tags,
    heroReady,
    approved: true,
  }
}

// ── Curated pools — verified via Unsplash API 2026-04-10 ──

const PHOTO_POOLS: Record<string, PhotoAsset[]> = {
  martial_arts: [
    asset('9XXvHgAcJpg', 'martial_arts', ['karate', 'kids', 'dojo', 'child', 'pink']),
    asset('0o-z2_FKfTA', 'martial_arts', ['karate', 'kids', 'dojo', 'grayscale', 'photo']),
    asset('PIF0x4cyoN4', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people']),
    asset('jc9UD4JQFRQ', 'martial_arts', ['karate', 'kids', 'dojo', 'woman', 'white']),
    asset('6xIMAcL6cdc', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people']),
    asset('o3KQX_VLhVY', 'martial_arts', ['karate', 'kids', 'dojo', 'man', 'white']),
    asset('1jOQNSc4P-c', 'martial_arts', ['karate', 'kids', 'dojo', 'boy', 'white']),
    asset('HHechVrIhf8', 'martial_arts', ['karate', 'kids', 'dojo', 'people', 'white']),
    asset('mCXfyKrP9kc', 'martial_arts', ['karate', 'kids', 'dojo', 'man', 'kneeling']),
    asset('uGbG4LnMFMY', 'martial_arts', ['karate', 'kids', 'dojo', 'man', 'and']),
    asset('b24JhTZlxSg', 'martial_arts', ['karate', 'kids', 'dojo', 'women', 'white'], false),
    asset('FuQwi_A6TKs', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people'], false),
    asset('_Y6DIBvwyoI', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'men'], false),
    asset('AxEagdApVXc', 'martial_arts', ['karate', 'kids', 'dojo', 'two', 'men'], false),
    asset('80H7Ce83y-I', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people'], false),
  ],
  pizza: [
    asset('qVOtaDNIOlI', 'pizza', ['pizza', 'restaurant', 'italian', 'table', 'topped']),
    asset('as8rLtJarwo', 'pizza', ['pizza', 'restaurant', 'italian', 'table', 'topped']),
    asset('Wz3u9_GtkWc', 'pizza', ['pizza', 'restaurant', 'italian', 'baked']),
    asset('XfIbOF19g68', 'pizza', ['pizza', 'restaurant', 'italian', 'plate', 'food']),
    asset('Z1n3HzOejKc', 'pizza', ['pizza', 'restaurant', 'italian', 'fire', 'fireplace']),
    asset('H7iRN37MUEI', 'pizza', ['pizza', 'restaurant', 'italian', 'and', 'drink']),
    asset('N14YLMviMCM', 'pizza', ['pizza', 'restaurant', 'italian', 'person', 'holding']),
    asset('KHDGp47y1KI', 'pizza', ['pizza', 'restaurant', 'italian', 'with', 'green']),
    asset('MCfD3z8B8II', 'pizza', ['pizza', 'restaurant', 'italian', 'pepperoni', 'sitting']),
    asset('Ct5LgFGvYvU', 'pizza', ['pizza', 'restaurant', 'italian', 'red', 'tomatoes']),
    asset('MZWRiMyPLAc', 'pizza', ['pizza', 'restaurant', 'italian', 'view', 'through'], false),
    asset('SXIKVAR9r9Y', 'pizza', ['pizza', 'restaurant', 'italian', 'and', 'drink'], false),
    asset('sIsvIqAYUdI', 'pizza', ['pizza', 'restaurant', 'italian', 'sitting', 'top'], false),
    asset('K7Eeh-mE1cw', 'pizza', ['pizza', 'restaurant', 'italian', 'couple', 'pizzas'], false),
    asset('0fmiFfzRhQY', 'pizza', ['pizza', 'restaurant', 'italian', 'cooked', 'pizzas'], false),
  ],
  burger: [
    asset('AeA2fS6xbCU', 'burger', ['burger', 'smash', 'burger', 'rectangular', 'brown']),
    asset('_amp2hHdEzc', 'burger', ['burger', 'smash', 'burger', 'green', 'wall']),
    asset('ARDTvCmiylA', 'burger', ['burger', 'smash', 'burger', 'juicy', 'cheeseburger']),
    asset('EgG7kbgtsF8', 'burger', ['burger', 'smash', 'burger', 'with', 'lettuce']),
    asset('9mRfxH8nB3U', 'burger', ['burger', 'smash', 'burger', 'person', 'holding']),
    asset('AfS9MPa2aCg', 'burger', ['burger', 'smash', 'burger', 'hand', 'reaching']),
    asset('6nPusAuBdOw', 'burger', ['burger', 'smash', 'burger', 'cheeseburger', 'with']),
    asset('rety0WWquRE', 'burger', ['burger', 'smash', 'burger', 'hamburger', 'sitting']),
    asset('gI1s9iAgAB4', 'burger', ['burger', 'smash', 'burger', 'brown', 'and']),
    asset('MocvvWyzNzQ', 'burger', ['burger', 'smash', 'burger', 'brown', 'wooden']),
    asset('NTJoAKxyxc0', 'burger', ['burger', 'smash', 'burger', 'cheeseburger', 'bun'], false),
    asset('oPhJ3-3AEmc', 'burger', ['burger', 'smash', 'burger', 'hamburger', 'white'], false),
    asset('fEaZ6bHMLlA', 'burger', ['burger', 'smash', 'burger', 'with', 'cheese'], false),
    asset('MYiT2IRkHkw', 'burger', ['burger', 'smash', 'burger', 'table', 'for'], false),
    asset('D2KfM-eXY78', 'burger', ['burger', 'smash', 'burger', 'knife', 'top'], false),
  ],
  taco_mexican: [
    asset('ADKR5qm4Gy4', 'taco_mexican', ['tacos', 'mexican', 'food', 'two', 'plate']),
    asset('Ic0TTwMHblw', 'taco_mexican', ['tacos', 'mexican', 'food', 'man', 'sitting']),
    asset('6WHl6T-fxU0', 'taco_mexican', ['tacos', 'mexican', 'food', 'person', 'holding']),
    asset('E2n6-GuBGYo', 'taco_mexican', ['tacos', 'mexican', 'food', 'burger', 'with']),
    asset('lOM_DkOU8PY', 'taco_mexican', ['tacos', 'mexican', 'food', 'close', 'plate']),
    asset('4p5t91rONXE', 'taco_mexican', ['tacos', 'mexican', 'food', 'plate']),
    asset('_Oo4ZSYQM3A', 'taco_mexican', ['tacos', 'mexican', 'food', 'person', 'holding']),
    asset('vvLZkwwsHeY', 'taco_mexican', ['tacos', 'mexican', 'food', 'white', 'plate']),
    asset('JiRSy0GfqPA', 'taco_mexican', ['tacos', 'mexican', 'food', 'close-up', 'photography']),
    asset('lc8BpLcljz4', 'taco_mexican', ['tacos', 'mexican', 'food', 'vegetable', 'salad']),
    asset('5mpht0M5H0E', 'taco_mexican', ['tacos', 'mexican', 'food', 'three', 'are'], false),
    asset('ItxirpkS020', 'taco_mexican', ['tacos', 'mexican', 'food', 'sliced', 'bread'], false),
    asset('Eve2qPqRUyg', 'taco_mexican', ['tacos', 'mexican', 'food', 'close-up', 'some'], false),
    asset('cLlC5qi8F4w', 'taco_mexican', ['tacos', 'mexican', 'food', 'plate', 'wooden'], false),
    asset('KWV-BNJAXN4', 'taco_mexican', ['tacos', 'mexican', 'food', 'red', 'and'], false),
  ],
  dental: [
    asset('Fdku_oMrDvk', 'dental', ['dentist', 'dental', 'office', 'room', 'with']),
    asset('4SUyx4KQ5Ik', 'dental', ['dentist', 'dental', 'office', 'man', 'blue']),
    asset('loBRFqXm1QA', 'dental', ['dentist', 'dental', 'office', 'boy', 'blue']),
    asset('_9b4WKR_u9I', 'dental', ['dentist', 'dental', 'office', 'woman', 'black']),
    asset('9F83toLNfkA', 'dental', ['dentist', 'dental', 'office', 'examining', 'patients']),
    asset('RR9Le91W98w', 'dental', ['dentist', 'dental', 'office', 'woman', 'black']),
    asset('I-kDEBUMAaQ', 'dental', ['dentist', 'dental', 'office', 'red', 'and']),
    asset('y8fWicGsv4g', 'dental', ['dentist', 'dental', 'office', 'stainless', 'steel']),
    asset('w9C2A4LXu4o', 'dental', ['dentist', 'dental', 'office', 'examining', 'patients']),
    asset('I_tiqvkfVq8', 'dental', ['dentist', 'dental', 'office', 'vintage', 'clinic']),
    asset('6SAzfKla3IE', 'dental', ['dentist', 'dental', 'office', 'yellow', 'and'], false),
    asset('ZFVM6UH-re4', 'dental', ['dentist', 'dental', 'office', 'surgeon', 'wearing'], false),
    asset('e7MJLM5VGjY', 'dental', ['dentist', 'dental', 'office', 'white', 'ceramic'], false),
    asset('u-z6s-gnYDQ', 'dental', ['dentist', 'dental', 'office', 'equipment', 'with'], false),
  ],
  gym_fitness: [
    asset('BXzVcS33-A0', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'working']),
    asset('UkP3YJW74Ew', 'gym_fitness', ['gym', 'fitness', 'workout', 'purple', 'glass']),
    asset('El0GmT1Bpm4', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'green']),
    asset('QFjlC7nasr0', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'lifts']),
    asset('Da94Wb7FupM', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'works']),
    asset('gP9rAnGJBRo', 'gym_fitness', ['gym', 'fitness', 'workout', 'close', 'barbell']),
    asset('qPqBV-FhoUQ', 'gym_fitness', ['gym', 'fitness', 'workout', 'weightlifting', 'straps']),
    asset('175WMFRMoOA', 'gym_fitness', ['gym', 'fitness', 'workout', 'black', 'and']),
    asset('vc09nUKk5xI', 'gym_fitness', ['gym', 'fitness', 'workout', 'overhead', 'view']),
    asset('gzeTjGu3b_k', 'gym_fitness', ['gym', 'fitness', 'workout', 'barbell', 'rack']),
    asset('1RNQ11ZODJM', 'gym_fitness', ['gym', 'fitness', 'workout', 'filled', 'with'], false),
    asset('U5kQvbQWoG0', 'gym_fitness', ['gym', 'fitness', 'workout', 'woman', 'holding'], false),
    asset('I72QeY20Q7o', 'gym_fitness', ['gym', 'fitness', 'workout', 'black', 'and'], false),
    asset('Il9YbhIBiOA', 'gym_fitness', ['gym', 'fitness', 'workout', 'weights', 'and'], false),
    asset('udE7Kh7QHbM', 'gym_fitness', ['gym', 'fitness', 'workout', 'black', 'dumbbells'], false),
  ],
  yoga_pilates: [
    asset('pi_RiEK2J1Q', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing']),
    asset('5EX5H5enXFs', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'pose']),
    asset('oaJaBFVMUQ4', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'modern', 'with']),
    asset('IjX2StadENA', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'various', 'signs']),
    asset('zGuL74wQOBM', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing']),
    asset('-XuG2BfYIVE', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing']),
    asset('iyV-7sFHwXI', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'practices']),
    asset('7LluSbQhULA', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'brown', 'and']),
    asset('3FdXv58Wsag', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'does']),
    asset('LhEQmm4flyE', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'does']),
    asset('PC0V3nl14UE', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing'], false),
    asset('lriXRISG-m0', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'working'], false),
    asset('0fiVrPJg5kU', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing'], false),
    asset('Qh3zjjW0bPA', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'black'], false),
    asset('cPwpEOvwAl4', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'group', 'people'], false),
  ],
  salon_barber: [
    asset('CgaS2F59yqw', 'salon_barber', ['hair', 'salon', 'barber', 'woman', 'getting']),
    asset('MUdB4YzDeKA', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'white']),
    asset('J99pG-3RHwc', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'white']),
    asset('arxAZJT5k2A', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'shaving']),
    asset('2ZjKLOe7vOI', 'salon_barber', ['hair', 'salon', 'barber', 'woman', 'black']),
    asset('OKzNB_nhj9k', 'salon_barber', ['hair', 'salon', 'barber', 'shop', 'sign']),
    asset('wT8lsNXUsM8', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'sitting']),
    asset('DN9j84Zrd5Q', 'salon_barber', ['hair', 'salon', 'barber', 'woman', 'cutting']),
    asset('3McoeLy3M8s', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'getting']),
    asset('yZv67D-_t2U', 'salon_barber', ['hair', 'salon', 'barber', 'building', 'that']),
    asset('po3kb8d1vts', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'getting'], false),
    asset('GvSsskFKbvI', 'salon_barber', ['hair', 'salon', 'barber', 'barbershop', 'mirror'], false),
    asset('yPjCWlfhumc', 'salon_barber', ['hair', 'salon', 'barber', 'close', 'brush'], false),
    asset('PbooBbLNMcw', 'salon_barber', ['hair', 'salon', 'barber', 'mannequin', 'wearing'], false),
    asset('vI3m5UnZ0aQ', 'salon_barber', ['hair', 'salon', 'barber', 'person', 'trimming'], false),
  ],
  coffee_cafe: [
    asset('pnD0_xkprRw', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'long', 'bench']),
    asset('3PZuuhPvjG4', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'yellow', 'plastic']),
    asset('zmUEyAPaPmo', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'counter', 'restaurant']),
    asset('StqkjF-SfoY', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'man', 'sitting']),
    asset('elGmeU87Ofw', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'kitchen', 'with']),
    asset('faI98xOXOYE', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'powered-on', 'pendant']),
    asset('S32QLE6DZPQ', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'store', 'front']),
    asset('S-bLFn0YnEM', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'antique', 'grinder']),
    asset('ie2Nh1CIwHg', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'counter', 'top']),
    asset('WbLbIkM4ePw', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'restaurant', 'sign']),
    asset('gK9O0apJOH0', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'stove', 'with'], false),
    asset('04-eXFoqvac', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'dining', 'room'], false),
    asset('VgQmjH52BYo', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'person', 'standing'], false),
    asset('PoG2cCucTHE', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'shelf', 'with'], false),
    asset('kr1OiK6KYfI', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'man', 'black'], false),
  ],
  landscaping: [
    asset('EkhWxU_pgLo', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'green']),
    asset('Ub-GUnTVFfw', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'orange']),
    asset('bsld7GjQwjI', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'mowing']),
    asset('RjxqFCXpt2c', 'landscaping', ['landscaping', 'lawn', 'care', 'sprinklers', 'watering']),
    asset('Th6YChjkr5U', 'landscaping', ['landscaping', 'lawn', 'care', 'carriage', 'brick']),
    asset('HGY_RHy2Ct0', 'landscaping', ['landscaping', 'lawn', 'care', 'person', 'waters']),
    asset('wk5kis1oUY8', 'landscaping', ['landscaping', 'lawn', 'care', 'path', 'the']),
    asset('IClVRn6PEQk', 'landscaping', ['landscaping', 'lawn', 'care', 'white', 'tower']),
    asset('KuVIfC7mtDc', 'landscaping', ['landscaping', 'lawn', 'care', 'building', 'and']),
    asset('6vtmw3NS0u4', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'walks']),
    asset('cWEVSZhPYm0', 'landscaping', ['landscaping', 'lawn', 'care', 'young', 'boy'], false),
    asset('UN1r27xGLO8', 'landscaping', ['landscaping', 'lawn', 'care', 'forklift', 'loading'], false),
    asset('OcTlF4oNXHU', 'landscaping', ['landscaping', 'lawn', 'care', 'gardener', 'with'], false),
    asset('2s4U6Rky1BY', 'landscaping', ['landscaping', 'lawn', 'care', 'forklift', 'loading'], false),
    asset('1ATmPeumVNc', 'landscaping', ['landscaping', 'lawn', 'care', 'large', 'yellow'], false),
  ],
  roofing: [
    asset('eFOkg4ZMiBs', 'roofing', ['roofing', 'contractor', 'man', 'yellow']),
    asset('Scaj0T40nFI', 'roofing', ['roofing', 'contractor', 'man', 'working']),
    asset('umJz4M-iCOw', 'roofing', ['roofing', 'contractor', 'couple', 'men']),
    asset('GXITWKvgm-k', 'roofing', ['roofing', 'contractor', 'man', 'with']),
    asset('4XMHsy4Rvi8', 'roofing', ['roofing', 'contractor', 'man', 'riding']),
    asset('G2J41LRaKkE', 'roofing', ['roofing', 'contractor', 'man', 'roof']),
    asset('RGkNFjRPyO0', 'roofing', ['roofing', 'contractor', 'two', 'men']),
    asset('63QXU8HtxTQ', 'roofing', ['roofing', 'contractor', 'group', 'houses']),
    asset('MyBBMM317A4', 'roofing', ['roofing', 'contractor', 'couple', 'people']),
    asset('4zwozQxDbD4', 'roofing', ['roofing', 'contractor', 'man', 'walking']),
    asset('-1l0iZaM8ms', 'roofing', ['roofing', 'contractor', 'man', 'standing'], false),
    asset('d4j5hns6sj8', 'roofing', ['roofing', 'contractor', 'two', 'construction'], false),
    asset('k3zOUWvZWgc', 'roofing', ['roofing', 'contractor', 'close', 'roof'], false),
    asset('HgzDl6c6ueo', 'roofing', ['roofing', 'contractor', 'gray', 'and'], false),
    asset('rnr834gRQ0s', 'roofing', ['roofing', 'contractor', 'the', 'roof'], false),
  ],
  auto_repair: [
    asset('vlUnqYZIr9E', 'auto_repair', ['auto', 'repair', 'mechanic', 'garage', 'with']),
    asset('I6pqshymjOw', 'auto_repair', ['auto', 'repair', 'mechanic', 'working', 'car']),
    asset('lJj2QwH8twE', 'auto_repair', ['auto', 'repair', 'mechanic', 'wrench', 'with']),
    asset('9gB7APNSquE', 'auto_repair', ['auto', 'repair', 'mechanic', 'using', 'wrench']),
    asset('WyOOWptd7so', 'auto_repair', ['auto', 'repair', 'mechanic', 'holding', 'motorcycle']),
    asset('DlgQBt3GK2k', 'auto_repair', ['auto', 'repair', 'mechanic', 'blurred', 'rickshaw']),
    asset('Fd6osyVbtG4', 'auto_repair', ['auto', 'repair', 'mechanic', 'grayscale', 'photo']),
    asset('WuOdwlPKzAM', 'auto_repair', ['auto', 'repair', 'mechanic', 'working', 'car']),
    asset('V8oE1K5memI', 'auto_repair', ['auto', 'repair', 'mechanic', 'using', 'screwdriver']),
    asset('DOAbIkd2SGo', 'auto_repair', ['auto', 'repair', 'mechanic', 'old', 'snow-covered']),
    asset('bDDKGSR6dw4', 'auto_repair', ['auto', 'repair', 'mechanic', 'rickshaw', 'parked'], false),
    asset('h8ROAaEjYrM', 'auto_repair', ['auto', 'repair', 'mechanic', 'working', 'car'], false),
    asset('gW34cv-Ojjs', 'auto_repair', ['auto', 'repair', 'mechanic', 'pouring', 'oil'], false),
    asset('VdXnpwrp1qc', 'auto_repair', ['auto', 'repair', 'mechanic', 'cars', 'being'], false),
    asset('oucLDFP-Ex0', 'auto_repair', ['auto', 'repair', 'mechanic', 'person', 'using'], false),
  ],
  cleaning: [
    asset('saXBWyQoXFU', 'cleaning', ['house', 'cleaning', 'service', 'girl', 'teal']),
    asset('aO1d0C5bi2k', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'black']),
    asset('cWuzPLSnEP8', 'cleaning', ['house', 'cleaning', 'service', 'red', 'and']),
    asset('Y3vDCL7_das', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'wearing']),
    asset('2RpE13rIbAM', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'mopping']),
    asset('S_9orb3OuOw', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'singing']),
    asset('Uvf-sHh0eAY', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with']),
    asset('4pOfO0XUybs', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'happily']),
    asset('o8Lyc1is43k', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with']),
    asset('2NcTLdFHpH8', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'mops']),
    asset('KPKt9et9vJc', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with'], false),
    asset('H0zuH57Fs-I', 'cleaning', ['house', 'cleaning', 'service', 'person', 'happily'], false),
    asset('YWS51jdrfdA', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with'], false),
    asset('h_cGl2nIzng', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with'], false),
    asset('cvWfWVHRBe0', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'wearing'], false),
  ],
  law: [
    asset('n4CLHNL5n6Y', 'law', ['law', 'office', 'attorney', 'person', 'using']),
    asset('iPheGw7_UaI', 'law', ['law', 'office', 'attorney', 'business', 'people']),
    asset('qY_Kdc-Xi40', 'law', ['law', 'office', 'attorney', 'ornate', 'with']),
    asset('0y2FXSJ70sc', 'law', ['law', 'office', 'attorney', 'grand', 'with']),
    asset('bEAvHnaC64s', 'law', ['law', 'office', 'attorney', 'elegant', 'with']),
    asset('hn6k00wZxr8', 'law', ['law', 'office', 'attorney', 'glasses', 'and']),
    asset('tjd5CfdDPRA', 'law', ['law', 'office', 'attorney', 'five', 'black']),
    asset('NfHuzWJW5PA', 'law', ['law', 'office', 'attorney', 'brick', 'building']),
  ],
  real_estate: [
    asset('rgJ1J8SDEAY', 'real_estate', ['real', 'estate', 'agent', 'white', 'and']),
    asset('oFMI6CdD7yU', 'real_estate', ['real', 'estate', 'agent', 'man', 'and']),
    asset('jpHw8ndwJ_Q', 'real_estate', ['real', 'estate', 'agent', 'two', 'men']),
    asset('h1RW-NFtUyc', 'real_estate', ['real', 'estate', 'agent', 'man', 'sitting']),
    asset('jJnZg7vBfMs', 'real_estate', ['real', 'estate', 'agent', 'keys', 'hand']),
    asset('05XcCfTOzN4', 'real_estate', ['real', 'estate', 'agent', 'man', 'purple']),
    asset('R2mMFDpe1eM', 'real_estate', ['real', 'estate', 'agent', 'calculator', 'keychain']),
    asset('NpTbVOkkom8', 'real_estate', ['real', 'estate', 'agent', 'white', 'and']),
    asset('5fNmWej4tAA', 'real_estate', ['real', 'estate', 'agent', 'person', 'holding']),
    asset('r3WAWU5Fi5Q', 'real_estate', ['real', 'estate', 'agent', 'aerial', 'photography']),
    asset('W8z6aiwfi1E', 'real_estate', ['real', 'estate', 'agent', 'man', 'black'], false),
    asset('GQn9GnMkVQg', 'real_estate', ['real', 'estate', 'agent', 'person', 'putting'], false),
    asset('OQMZwNd3ThU', 'real_estate', ['real', 'estate', 'agent', 'man', 'writing'], false),
    asset('FlPc9_VocJ4', 'real_estate', ['real', 'estate', 'agent', 'person', 'using'], false),
    asset('ZZdsJmzuerA', 'real_estate', ['real', 'estate', 'agent', 'person', 'holding'], false),
  ],
  food_takeout: [
    asset('1504674900247-0877df9cc836', 'food_takeout', ['food', 'takeout', 'plated']),
    asset('1555396273-367ea4eb4db5', 'food_takeout', ['restaurant', 'counter', 'order']),
    asset('1498654896616-44d816763456', 'food_takeout', ['food', 'container', 'takeaway']),
    asset('1526234637049-1b1c5a23d9c7', 'food_takeout', ['food', 'bag', 'pickup']),
    asset('1414235077428-338989a2e8c0', 'food_takeout', ['food', 'plated', 'fresh']),
    asset('1540914124281-342587941389', 'food_takeout', ['food', 'bowl', 'fresh']),
    asset('1517248135467-4c7edcad34c4', 'food_takeout', ['restaurant', 'interior', 'dining']),
    asset('1567620905732-2d1ec7ab7445', 'food_takeout', ['food', 'plate', 'closeup']),
    asset('1476224203421-9ac39bcb3327', 'food_takeout', ['food', 'spread', 'table']),
    asset('1555939594-58d7cb561ad1', 'food_takeout', ['food', 'healthy', 'bowl']),
  ],
  bbq: [
    asset('1529193591184-b1d58069ecf0', 'bbq', ['bbq', 'smoker', 'ribs']),
    asset('1544025162-d76694265947', 'bbq', ['brisket', 'smoked', 'sliced']),
    asset('1558030006-c5b10a4d2ed0', 'bbq', ['bbq', 'platter', 'sides']),
    asset('1555939594-58d7cb561ad1', 'bbq', ['bbq', 'pulled-pork', 'sandwich']),
    asset('1504674900247-0877df9cc836', 'bbq', ['grilling', 'meat', 'flame']),
    asset('1529692236671-f1f6cf9683ba', 'bbq', ['bbq', 'sauce', 'ribs']),
    asset('1558030137-a56c9b005a47', 'bbq', ['smokehouse', 'interior', 'rustic'], false),
    asset('1606567595334-d39972c85dbe', 'bbq', ['bbq', 'chicken', 'wings']),
    asset('1567620905732-2d1ec7ab7445', 'bbq', ['food', 'closeup', 'grilled']),
    asset('1559847844-5315695dadae', 'bbq', ['corn', 'bbq', 'sides']),
  ],
  bar_brewery: [
    asset('1436076863939-06870fe779c2', 'bar_brewery', ['bar', 'drinks', 'counter']),
    asset('1514933651103-005eec06c04b', 'bar_brewery', ['beer', 'tap', 'draft']),
    asset('1543007630-9710e4a00a20', 'bar_brewery', ['brewery', 'tanks', 'interior']),
    asset('1575444758702-4a6b9222336e', 'bar_brewery', ['cocktail', 'bar', 'mixing']),
    asset('1516997121675-4c2d1684aa3e', 'bar_brewery', ['beer', 'flight', 'tasting']),
    asset('1525268323446-0505b6fe7778', 'bar_brewery', ['bar', 'interior', 'lounge']),
    asset('1551024709-8f23befc6f87', 'bar_brewery', ['craft-beer', 'pint', 'golden']),
    asset('1470337458703-46a1888eb515', 'bar_brewery', ['pub', 'traditional', 'cozy'], false),
    asset('1569056416740-3a02e44c66d5', 'bar_brewery', ['wine', 'glass', 'cheers']),
    asset('1560512823-829485b8bf24', 'bar_brewery', ['bar', 'neon', 'night']),
  ],
  dance_studio: [
    asset('1508700929628-666bc8bd84ea', 'dance_studio', ['dance', 'studio', 'ballet']),
    asset('1547153760-18fc86ef0385', 'dance_studio', ['dance', 'class', 'students']),
    asset('1504609813442-a8924e83f76e', 'dance_studio', ['ballet', 'dancer', 'pointe']),
    asset('1518611012118-696072aa579a', 'dance_studio', ['dance', 'movement', 'class']),
    asset('1574680096145-d05b474e2155', 'dance_studio', ['dance', 'fitness', 'energy']),
    asset('1571019614242-c5c5dee9f50b', 'dance_studio', ['dance', 'studio', 'floor'], false),
    asset('1545205597-3d9d02c29597', 'dance_studio', ['dance', 'stretch', 'warmup']),
    asset('1518310383802-640c2de311b2', 'dance_studio', ['dance', 'barre', 'practice']),
    asset('1517836357463-d25dfeac3438', 'dance_studio', ['dance', 'performance', 'stage']),
    asset('1506126613408-eca07ce68773', 'dance_studio', ['dance', 'zen', 'movement']),
  ],
  spa_wellness: [
    asset('1560750588-73207b1ef5b8', 'spa_wellness', ['spa', 'facial', 'treatment']),
    asset('1570172619644-dfd03ed5d881', 'spa_wellness', ['skincare', 'mask', 'glow']),
    asset('1516975080664-ed2fc6a32937', 'spa_wellness', ['spa', 'candles', 'relax']),
    asset('1604654894610-df63bc536371', 'spa_wellness', ['nails', 'manicure', 'salon']),
    asset('1519014816548-bf5fe059798b', 'spa_wellness', ['nail-art', 'design', 'color']),
    asset('1544027993-37dbfe43562a', 'spa_wellness', ['massage', 'stones', 'wellness']),
    asset('1540555700478-4be289fbecef', 'spa_wellness', ['spa', 'towels', 'oils']),
    asset('1573497019940-1c28c88b4f3e', 'spa_wellness', ['wellness', 'calm', 'peace'], false),
    asset('1576091160399-112ba8d25d1d', 'spa_wellness', ['health', 'consult', 'care']),
    asset('1571019613454-1cb2f99b2d8b', 'spa_wellness', ['wellness', 'stretch', 'body']),
  ],
  plumbing: [
    asset('1585704032915-c3400ca199e7', 'plumbing', ['plumbing', 'pipe', 'wrench']),
    asset('1607472586893-edb57bdc0e39', 'plumbing', ['plumber', 'sink', 'repair']),
    asset('1585704032915-c3400ca199e7', 'plumbing', ['plumbing', 'tools', 'work']),
    asset('1504328345606-18bbc8c9d7d1', 'plumbing', ['repair', 'maintenance', 'home']),
    asset('1581578731548-c64695cc6952', 'plumbing', ['home-service', 'professional', 'repair']),
    asset('1621905251189-08b45d6a269e', 'plumbing', ['construction', 'work', 'trade']),
    asset('1558618047-f4e90fca3ed9', 'plumbing', ['water', 'emergency', 'damage'], false),
    asset('1621905252507-b35492cc74b4', 'plumbing', ['hvac', 'pipe', 'system']),
    asset('1600585154340-be6161a56a0c', 'plumbing', ['home', 'interior', 'bathroom']),
    asset('1556909114-f6e7ad7d3136', 'plumbing', ['bathroom', 'modern', 'clean']),
  ],
  childcare: [
    asset('1503676260728-1c00da094a0b', 'childcare', ['kids', 'learning', 'classroom']),
    asset('1524178232363-1fb2b075b655', 'childcare', ['children', 'play', 'daycare']),
    asset('1509062522246-3755977927d7', 'childcare', ['education', 'school', 'teaching']),
    asset('1503676260728-1c00da094a0b', 'childcare', ['preschool', 'activity', 'crafts']),
    asset('1524178232363-1fb2b075b655', 'childcare', ['playground', 'outdoor', 'fun']),
    asset('1509062522246-3755977927d7', 'childcare', ['reading', 'books', 'story'], false),
    asset('1503676260728-1c00da094a0b', 'childcare', ['nursery', 'toddler', 'care']),
    asset('1524178232363-1fb2b075b655', 'childcare', ['coloring', 'art', 'creative']),
    asset('1509062522246-3755977927d7', 'childcare', ['teacher', 'aide', 'nurturing']),
    asset('1523050854058-8df90110c476', 'childcare', ['learning', 'blocks', 'toys']),
  ],
  pet_services: [
    asset('1548199973-03cce0bbc87b', 'pet_services', ['dogs', 'walking', 'park']),
    asset('1587300003388-59208cc962cb', 'pet_services', ['dog', 'golden', 'happy']),
    asset('1601758228041-f3b2795255f1', 'pet_services', ['pet', 'grooming', 'care']),
    asset('1548199973-03cce0bbc87b', 'pet_services', ['puppy', 'cute', 'outdoor']),
    asset('1587300003388-59208cc962cb', 'pet_services', ['vet', 'clinic', 'checkup']),
    asset('1601758228041-f3b2795255f1', 'pet_services', ['pet', 'bath', 'groom'], false),
    asset('1548199973-03cce0bbc87b', 'pet_services', ['boarding', 'kennel', 'play']),
    asset('1587300003388-59208cc962cb', 'pet_services', ['cat', 'feline', 'veterinary']),
    asset('1601758228041-f3b2795255f1', 'pet_services', ['pet-store', 'supplies', 'shop']),
    asset('1559839734-2b71ea197ec2', 'pet_services', ['veterinarian', 'doctor', 'stethoscope']),
  ],
  medical_clinic: [
    asset('1519494026892-80bbd2d6fd0d', 'medical_clinic', ['hospital', 'hallway', 'modern']),
    asset('1576091160399-112ba8d25d1d', 'medical_clinic', ['doctor', 'consultation', 'exam']),
    asset('1579684385127-1ef15d508118', 'medical_clinic', ['medical', 'equipment', 'stethoscope']),
    asset('1631217868264-e5b90bb7e133', 'medical_clinic', ['clinic', 'modern', 'interior']),
    asset('1559839734-2b71ea197ec2', 'medical_clinic', ['doctor', 'female', 'smiling']),
    asset('1519494026892-80bbd2d6fd0d', 'medical_clinic', ['urgent-care', 'facility', 'clean']),
    asset('1576091160399-112ba8d25d1d', 'medical_clinic', ['patient', 'care', 'checkup'], false),
    asset('1579684385127-1ef15d508118', 'medical_clinic', ['lab', 'testing', 'results']),
    asset('1631217868264-e5b90bb7e133', 'medical_clinic', ['pharmacy', 'medication', 'rx']),
    asset('1576091160550-2173dba999ef', 'medical_clinic', ['therapy', 'rehab', 'recovery']),
  ],
  tutoring: [
    asset('1509062522246-3755977927d7', 'tutoring', ['education', 'classroom', 'school']),
    asset('1503676260728-1c00da094a0b', 'tutoring', ['student', 'learning', 'desk']),
    asset('1524178232363-1fb2b075b655', 'tutoring', ['tutor', 'one-on-one', 'teaching']),
    asset('1523050854058-8df90110c476', 'tutoring', ['books', 'study', 'library']),
    asset('1509062522246-3755977927d7', 'tutoring', ['math', 'science', 'STEM']),
    asset('1503676260728-1c00da094a0b', 'tutoring', ['reading', 'english', 'language']),
    asset('1524178232363-1fb2b075b655', 'tutoring', ['test-prep', 'SAT', 'ACT'], false),
    asset('1523050854058-8df90110c476', 'tutoring', ['laptop', 'online', 'virtual']),
    asset('1509062522246-3755977927d7', 'tutoring', ['whiteboard', 'lesson', 'concept']),
    asset('1503676260728-1c00da094a0b', 'tutoring', ['homework', 'help', 'support']),
  ],
  default: [
    asset('1497366216548-37526070297c', 'default', ['office', 'modern', 'workspace']),
    asset('1497366216548-37526070297c', 'default', ['professional', 'business', 'clean']),
    asset('1497366216548-37526070297c', 'default', ['interior', 'minimal', 'bright']),
    asset('1497366216548-37526070297c', 'default', ['desk', 'computer', 'work'], false),
    asset('1497366216548-37526070297c', 'default', ['meeting', 'team', 'corporate']),
  ],
}

// ── Parent category → subtype fallback ──
const PARENT_TO_SUBTYPE: Record<string, string> = {
  restaurant: 'food_takeout',
  martial_arts: 'martial_arts',
  gym: 'gym_fitness',
  fitness: 'yoga_pilates',
  dental: 'dental',
  chiropractic: 'spa_wellness',
  medical: 'medical_clinic',
  salon: 'salon_barber',
  barber: 'salon_barber',
  beauty: 'spa_wellness',
  roofing: 'roofing',
  plumbing: 'plumbing',
  hvac: 'plumbing',
  landscaping: 'landscaping',
  cleaning: 'cleaning',
  auto: 'auto_repair',
  real_estate: 'real_estate',
  legal: 'law',
  accounting: 'law',
  insurance: 'law',
  education: 'tutoring',
  veterinary: 'pet_services',
  photography: 'default',
  retail: 'default',
}

/**
 * Get the full curated pool for a subtype.
 * Falls back to parent category pool, then default.
 */
export function getImagePool(subtype: string): PhotoAsset[] {
  if (PHOTO_POOLS[subtype]) return PHOTO_POOLS[subtype]
  const parent = PARENT_TO_SUBTYPE[subtype]
  if (parent && PHOTO_POOLS[parent]) return PHOTO_POOLS[parent]
  return PHOTO_POOLS['default']
}

/**
 * Deterministic hero image selection.
 * Same site always gets same image. Different sites get variety.
 * When audienceHints includes kids/children/youth, bias toward kid-tagged images.
 * Returns escalate flag if pool is empty (should never happen with curated pools).
 */
export function selectHeroImage(
  subtype: string,
  seed?: string,
  audienceHints?: string[],
): PhotoAsset & { escalate: boolean } {
  let pool = getImagePool(subtype).filter((p) => p.heroReady && p.approved)
  if (pool.length === 0) {
    const fallback = PHOTO_POOLS['default'][0]
    return { ...fallback, escalate: true }
  }

  // Audience bias: if kids/children/youth requested, prefer kid-tagged images
  const wantsKids = (audienceHints || []).some((h) =>
    /\b(kids?|children|youth|ages?\s*\d)/i.test(h),
  )
  if (wantsKids) {
    const kidPool = pool.filter((p) =>
      p.tags.some((t) => /kids|children|youth/i.test(t)),
    )
    if (kidPool.length > 0) {
      pool = kidPool
    }
  }

  // Deterministic hash from seed
  let hash = 0
  const s = seed || 'default'
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) - hash + s.charCodeAt(i)) | 0
  }
  const index = Math.abs(hash) % pool.length
  return { ...pool[index], escalate: false }
}

/**
 * Select service images from pool (non-hero assets preferred for variety).
 */
export function selectServiceImages(
  subtype: string,
  count: number,
  seed?: string,
): PhotoAsset[] {
  const pool = getImagePool(subtype).filter((p) => p.approved)
  if (pool.length === 0) return []

  let hash = 0
  const s = (seed || 'svc') + '-service'
  for (let i = 0; i < s.length; i++) {
    hash = ((hash << 5) - hash + s.charCodeAt(i)) | 0
  }

  const results: PhotoAsset[] = []
  for (let i = 0; i < count; i++) {
    const idx = Math.abs(hash + i * 7) % pool.length
    results.push(pool[idx])
  }
  return results
}
