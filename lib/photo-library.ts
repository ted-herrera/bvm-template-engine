// ── Curated photo pools ──
// Deterministic. No keyword search. No Unsplash API calls at render time.

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

// ── Curated pools keyed by subtype ──

const PHOTO_POOLS: Record<string, PhotoAsset[]> = {
  martial_arts: [
    // Adult / general martial arts — no gym crossover IDs
    asset('1555597673-b21d5c935865', 'martial_arts', ['karate', 'dojo', 'training']),
    asset('1564415315949-7a0c4c73aab4', 'martial_arts', ['sparring', 'martial-arts', 'kick']),
    asset('1555597408-26bc8e548a46', 'martial_arts', ['karate', 'stance', 'gi']),
    asset('1514050566906-8d077bae7046', 'martial_arts', ['training', 'dojo', 'practice']),
    asset('1574023278781-91643506afeb', 'martial_arts', ['jiu-jitsu', 'grappling', 'mat']),
    asset('1544367567-0f2fcb009e0b', 'martial_arts', ['taekwondo', 'kick', 'training']),
    asset('1598971639058-fab3c3109a00', 'martial_arts', ['stretching', 'warmup', 'mat'], false),
    // Kids martial arts — tagged for audience bias
    asset('1611601332662-1b5fffbc1e12', 'martial_arts', ['kids', 'karate', 'belt', 'children', 'youth']),
    asset('1580477667995-2b94f01c9516', 'martial_arts', ['kids', 'karate', 'class', 'children', 'dojo']),
    asset('1574023278781-91643506afeb', 'martial_arts', ['kids', 'jiu-jitsu', 'children', 'youth', 'grappling']),
    asset('1599058917212-d750089bc07e', 'martial_arts', ['kids', 'self-defense', 'children', 'training']),
    asset('1544367567-0f2fcb009e0b', 'martial_arts', ['kids', 'taekwondo', 'youth', 'kick', 'children']),
    asset('1555597673-b21d5c935865', 'martial_arts', ['kids', 'karate', 'dojo', 'youth', 'instructor']),
    asset('1564415315949-7a0c4c73aab4', 'martial_arts', ['kids', 'sparring', 'children', 'practice']),
    asset('1555597408-26bc8e548a46', 'martial_arts', ['kids', 'karate', 'stance', 'children', 'beginner']),
    asset('1514050566906-8d077bae7046', 'martial_arts', ['kids', 'martial-arts', 'children', 'ages-4-12']),
    asset('1611601332662-1b5fffbc1e12', 'martial_arts', ['kids', 'belt-testing', 'youth', 'achievement', 'children']),
  ],
  pizza: [
    asset('1565299624946-b28f40a0ae38', 'pizza', ['pizza', 'slice', 'cheese']),
    asset('1574071318508-1cdbab80d002', 'pizza', ['pizza', 'fresh', 'oven']),
    asset('1513104890138-7c749659a591', 'pizza', ['pizza', 'pepperoni', 'plated']),
    asset('1571407970349-bc81e7e96d47', 'pizza', ['pizza', 'margherita', 'basil']),
    asset('1604382354936-07c5d9983bd3', 'pizza', ['pizza', 'baking', 'kitchen']),
    asset('1593246049226-ded77bf90326', 'pizza', ['pizza', 'woodfire', 'restaurant']),
    asset('1595854341625-f93b50fea6d0', 'pizza', ['pizzeria', 'counter', 'interior'], false),
    asset('1588315029754-2dd089d39a1a', 'pizza', ['pizza', 'making', 'dough']),
    asset('1528137871618-79d2dd2a52f7', 'pizza', ['pizza', 'box', 'delivery'], false),
    asset('1548369937-47519962c11a', 'pizza', ['pizza', 'restaurant', 'dining']),
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
  burger: [
    asset('1568901346375-23c9450c58cd', 'burger', ['burger', 'gourmet', 'brioche']),
    asset('1550317138-10000687a72b', 'burger', ['burger', 'fries', 'meal']),
    asset('1551782450-a2132b4ba21d', 'burger', ['burger', 'cheeseburger', 'closeup']),
    asset('1571091718767-18b5b1457add', 'burger', ['burger', 'grill', 'cooking']),
    asset('1572802419-eb291570bc7d', 'burger', ['burger', 'loaded', 'toppings']),
    asset('1586190848861-99aa4a171e90', 'burger', ['burger', 'restaurant', 'table']),
    asset('1561758033-7e924f732c80', 'burger', ['burger', 'joint', 'interior'], false),
    asset('1594212699903-ec8a3eba7793', 'burger', ['burger', 'smash', 'griddle']),
    asset('1553979459-d2229ba7433b', 'burger', ['burger', 'classic', 'sesame']),
    asset('1608767221055-b6c80b0c0c0c', 'burger', ['burger', 'double', 'stacked']),
  ],
  taco_mexican: [
    asset('1565299585323-38d6b0865b47', 'taco_mexican', ['tacos', 'plated', 'fresh']),
    asset('1551504734-5ee1c4a1479b', 'taco_mexican', ['tacos', 'street', 'authentic']),
    asset('1599974579688-8dbdd335c77f', 'taco_mexican', ['tacos', 'variety', 'colorful']),
    asset('1564767609342-620cb19b2357', 'taco_mexican', ['mexican', 'food', 'spread']),
    asset('1552332386-f8dd00dc2f85', 'taco_mexican', ['burrito', 'mexican', 'wrap']),
    asset('1615870216519-2f9fa575fa5c', 'taco_mexican', ['salsa', 'chips', 'appetizer']),
    asset('1625167685678-c1c76e4e5a00', 'taco_mexican', ['tacos', 'al-pastor', 'meat']),
    asset('1586511925558-a7b6541d340b', 'taco_mexican', ['mexican', 'restaurant', 'interior'], false),
    asset('1541014741-c4c148c6f506', 'taco_mexican', ['guacamole', 'fresh', 'prep']),
    asset('1582234372722-50d7ccc30ebd', 'taco_mexican', ['nachos', 'loaded', 'cheese']),
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
  coffee_cafe: [
    asset('1495474472287-4d71bcdd2085', 'coffee_cafe', ['coffee', 'latte', 'art']),
    asset('1509042239860-f550ce710b93', 'coffee_cafe', ['coffee', 'cup', 'beans']),
    asset('1501339847302-ac426a4a7cbb', 'coffee_cafe', ['cafe', 'interior', 'cozy']),
    asset('1442512595331-e89e73853f31', 'coffee_cafe', ['coffee', 'shop', 'counter']),
    asset('1461023058943-07fcbe16d735', 'coffee_cafe', ['coffee', 'pour', 'barista']),
    asset('1453614512568-c4024d13c247', 'coffee_cafe', ['espresso', 'machine', 'steam']),
    asset('1511920170033-f8396924c348', 'coffee_cafe', ['pastry', 'croissant', 'coffee']),
    asset('1521302080334-4bebac2763a6', 'coffee_cafe', ['cafe', 'table', 'window'], false),
    asset('1514432324607-8f8b68ecfc9d', 'coffee_cafe', ['latte', 'foam', 'closeup']),
    asset('1559496417-e7f25cb247f3', 'coffee_cafe', ['coffee', 'beans', 'roasted']),
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
  dental: [
    asset('1629909613654-28e377c37b09', 'dental', ['dental', 'office', 'chair']),
    asset('1606811841689-23dfddce3e95', 'dental', ['dental', 'tools', 'exam']),
    asset('1588776814546-1ffcf47267a5', 'dental', ['dentist', 'patient', 'treatment']),
    asset('1609840114035-3c981b782dfe', 'dental', ['smile', 'teeth', 'whitening']),
    asset('1606265752439-1f18756aa5fc', 'dental', ['dental', 'clinic', 'modern']),
    asset('1579684385127-1ef15d508118', 'dental', ['medical', 'gloves', 'exam']),
    asset('1576091160399-112ba8d25d1d', 'dental', ['healthcare', 'provider', 'consult']),
    asset('1631217868264-e5b90bb7e133', 'dental', ['dental', 'equipment', 'modern']),
    asset('1607613009820-a29f7bb81c04', 'dental', ['smile', 'bright', 'confident']),
    asset('1598256989800-fe5f95da9787', 'dental', ['dental', 'xray', 'imaging'], false),
  ],
  gym_fitness: [
    asset('1534438327276-14e5300c3a48', 'gym_fitness', ['gym', 'equipment', 'modern']),
    asset('1571019614242-c5c5dee9f50b', 'gym_fitness', ['workout', 'training', 'athlete']),
    asset('1517836357463-d25dfeac3438', 'gym_fitness', ['weights', 'dumbbell', 'lifting']),
    asset('1574680096145-d05b474e2155', 'gym_fitness', ['crossfit', 'box', 'training']),
    asset('1526506118085-60ce8714f8c5', 'gym_fitness', ['fitness', 'intense', 'workout']),
    asset('1549719386-74dfcbf7dbed', 'gym_fitness', ['boxing', 'training', 'bag']),
    asset('1518611012118-696072aa579a', 'gym_fitness', ['group', 'class', 'energy']),
    asset('1517438322307-e67111335449', 'gym_fitness', ['boxing', 'gloves', 'ring']),
    asset('1576678927484-cc907957088c', 'gym_fitness', ['personal-training', 'coach', 'session'], false),
    asset('1540497077202-7c8a3999166f', 'gym_fitness', ['running', 'treadmill', 'cardio']),
  ],
  yoga_pilates: [
    asset('1545205597-3d9d02c29597', 'yoga_pilates', ['yoga', 'pose', 'studio']),
    asset('1506126613408-eca07ce68773', 'yoga_pilates', ['meditation', 'peace', 'morning']),
    asset('1599901860904-17e6ed7083a0', 'yoga_pilates', ['yoga', 'class', 'group']),
    asset('1603988363607-e1e4a66962c6', 'yoga_pilates', ['yoga', 'mat', 'stretch']),
    asset('1518611012118-696072aa579a', 'yoga_pilates', ['pilates', 'studio', 'class']),
    asset('1518310383802-640c2de311b2', 'yoga_pilates', ['pilates', 'reformer', 'exercise']),
    asset('1544367567-0f2fcb009e0b', 'yoga_pilates', ['yoga', 'balance', 'pose']),
    asset('1574680096145-d05b474e2155', 'yoga_pilates', ['fitness', 'stretch', 'flexibility'], false),
    asset('1571019613454-1cb2f99b2d8b', 'yoga_pilates', ['wellness', 'mindful', 'breath']),
    asset('1588286840104-8957b019727f', 'yoga_pilates', ['yoga', 'outdoor', 'nature']),
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
  salon_barber: [
    asset('1560066984-138dadb4c035', 'salon_barber', ['salon', 'styling', 'chair']),
    asset('1522337360788-8b13dee7a37e', 'salon_barber', ['haircut', 'styling', 'professional']),
    asset('1562322140-8baeececf3df', 'salon_barber', ['hair', 'color', 'salon']),
    asset('1503951914875-452f4aca7490', 'salon_barber', ['barber', 'shop', 'vintage']),
    asset('1585747860019-8e69a67d3073', 'salon_barber', ['barber', 'fade', 'cut']),
    asset('1599351431202-1e0f0137899a', 'salon_barber', ['barber', 'chair', 'mirror']),
    asset('1621605815971-fbc98d665033', 'salon_barber', ['barber', 'tools', 'scissors']),
    asset('1595476108010-b4d1f102b1b1', 'salon_barber', ['salon', 'blowout', 'style']),
    asset('1560750588-73207b1ef5b8', 'salon_barber', ['beauty', 'treatment', 'care'], false),
    asset('1604654894610-df63bc536371', 'salon_barber', ['nails', 'manicure', 'hands']),
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
  roofing: [
    asset('1632823471565-1ecdf5c6da3a', 'roofing', ['roof', 'shingles', 'work']),
    asset('1600585154340-be6161a56a0c', 'roofing', ['house', 'residential', 'home']),
    asset('1504307651254-35680f356dfd', 'roofing', ['construction', 'commercial', 'building']),
    asset('1558618047-f4e90fca3ed9', 'roofing', ['storm', 'damage', 'repair']),
    asset('1558036117-15d82a90b9b1', 'roofing', ['home', 'exterior', 'quality']),
    asset('1570129477492-45c003edd2be', 'roofing', ['house', 'suburban', 'residential']),
    asset('1600596542815-ffad4c1539a9', 'roofing', ['home', 'modern', 'exterior']),
    asset('1632939890255-a2f3ee12a95f', 'roofing', ['roof', 'tiles', 'material']),
    asset('1621905251189-08b45d6a269e', 'roofing', ['construction', 'worker', 'site'], false),
    asset('1504328345606-18bbc8c9d7d1', 'roofing', ['repair', 'maintenance', 'tools']),
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
  landscaping: [
    asset('1500382017468-9049fed747ef', 'landscaping', ['lawn', 'green', 'field']),
    asset('1416879595882-3373a0480b5b', 'landscaping', ['garden', 'plants', 'outdoor']),
    asset('1585320806297-9794b3e4eeae', 'landscaping', ['landscape', 'design', 'path']),
    asset('1622383563227-04401ab4e5ea', 'landscaping', ['irrigation', 'sprinkler', 'water']),
    asset('1558618666-fcd25c85cd64', 'landscaping', ['yard', 'mowing', 'lawn']),
    asset('1416879595882-3373a0480b5b', 'landscaping', ['garden', 'flowers', 'beds']),
    asset('1500382017468-9049fed747ef', 'landscaping', ['green', 'outdoor', 'nature']),
    asset('1585320806297-9794b3e4eeae', 'landscaping', ['walkway', 'stone', 'design'], false),
    asset('1622383563227-04401ab4e5ea', 'landscaping', ['watering', 'system', 'smart']),
    asset('1558618666-fcd25c85cd64', 'landscaping', ['trimming', 'edging', 'maintenance']),
  ],
  cleaning: [
    asset('1581578731548-c64695cc6952', 'cleaning', ['cleaning', 'home', 'service']),
    asset('1628177142898-93e36e4e3a50', 'cleaning', ['cleaning', 'supplies', 'spray']),
    asset('1584820927498-cfe5211fd8bf', 'cleaning', ['mop', 'floor', 'shine']),
    asset('1527515637462-cee1b7d8bbf9', 'cleaning', ['clean', 'kitchen', 'bright']),
    asset('1581578731548-c64695cc6952', 'cleaning', ['cleaning', 'professional', 'team']),
    asset('1628177142898-93e36e4e3a50', 'cleaning', ['products', 'eco', 'green']),
    asset('1584820927498-cfe5211fd8bf', 'cleaning', ['vacuum', 'carpet', 'deep-clean'], false),
    asset('1527515637462-cee1b7d8bbf9', 'cleaning', ['bathroom', 'spotless', 'tidy']),
    asset('1556909114-f6e7ad7d3136', 'cleaning', ['interior', 'clean', 'modern']),
    asset('1484154218962-a197022b5858', 'cleaning', ['home', 'organized', 'fresh']),
  ],
  auto_repair: [
    asset('1486262715619-67b85e0b08d3', 'auto_repair', ['mechanic', 'engine', 'repair']),
    asset('1619642751034-765dfdf7c58e', 'auto_repair', ['auto-shop', 'tools', 'garage']),
    asset('1487754180451-c456f719a1fc', 'auto_repair', ['car', 'repair', 'wrench']),
    asset('1486262715619-67b85e0b08d3', 'auto_repair', ['engine', 'diagnostic', 'bay']),
    asset('1619642751034-765dfdf7c58e', 'auto_repair', ['lift', 'inspection', 'under']),
    asset('1487754180451-c456f719a1fc', 'auto_repair', ['brake', 'service', 'parts'], false),
    asset('1486262715619-67b85e0b08d3', 'auto_repair', ['oil-change', 'maintenance', 'shop']),
    asset('1619642751034-765dfdf7c58e', 'auto_repair', ['tire', 'rotation', 'wheel']),
    asset('1487754180451-c456f719a1fc', 'auto_repair', ['transmission', 'repair', 'work']),
    asset('1580273916550-e323be2ae537', 'auto_repair', ['car', 'vehicle', 'exterior']),
  ],
  real_estate: [
    asset('1560518883-ce09059eeffa', 'real_estate', ['house', 'key', 'new-home']),
    asset('1600585154340-be6161a56a0c', 'real_estate', ['home', 'exterior', 'residential']),
    asset('1600596542815-ffad4c1539a9', 'real_estate', ['house', 'modern', 'front']),
    asset('1570129477492-45c003edd2be', 'real_estate', ['suburb', 'neighborhood', 'homes']),
    asset('1560518883-ce09059eeffa', 'real_estate', ['sold', 'sign', 'property']),
    asset('1600585154340-be6161a56a0c', 'real_estate', ['listing', 'showing', 'tour']),
    asset('1600596542815-ffad4c1539a9', 'real_estate', ['dream-home', 'family', 'move'], false),
    asset('1570129477492-45c003edd2be', 'real_estate', ['community', 'street', 'curb']),
    asset('1484154218962-a197022b5858', 'real_estate', ['interior', 'kitchen', 'staging']),
    asset('1556909114-f6e7ad7d3136', 'real_estate', ['bathroom', 'renovation', 'modern']),
  ],
  law: [
    asset('1589829545856-d10d557cf95f', 'law', ['law', 'gavel', 'justice']),
    asset('1450101499163-c8848c66ca85', 'law', ['office', 'desk', 'documents']),
    asset('1507679799987-c73779587ccf', 'law', ['attorney', 'suit', 'professional']),
    asset('1589994965851-a8f479c573a9', 'law', ['scales', 'justice', 'court']),
    asset('1589829545856-d10d557cf95f', 'law', ['legal', 'courtroom', 'gavel']),
    asset('1450101499163-c8848c66ca85', 'law', ['contract', 'signing', 'agreement']),
    asset('1507679799987-c73779587ccf', 'law', ['consultation', 'meeting', 'client'], false),
    asset('1589994965851-a8f479c573a9', 'law', ['defense', 'trial', 'representation']),
    asset('1554224155-6726b3ff858f', 'law', ['accounting', 'review', 'analysis']),
    asset('1460925895917-afdab827c52f', 'law', ['strategy', 'planning', 'briefcase']),
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

  // ── Fallback ──
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
