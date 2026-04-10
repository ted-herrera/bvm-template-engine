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

function verifiedAsset(id: string, url: string, subtype: string, tags: string[], heroReady = true): PhotoAsset {
  return { id, url, subtype, tags, heroReady, approved: true }
}

// ── Curated pools — verified via Unsplash API 2026-04-10 ──

const PHOTO_POOLS: Record<string, PhotoAsset[]> = {
  martial_arts: [
    verifiedAsset('9XXvHgAcJpg', 'https://images.unsplash.com/photo-1616447285757-3d0084ebd43b?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'child', 'pink']),
    verifiedAsset('0o-z2_FKfTA', 'https://images.unsplash.com/photo-1616447285364-f1461103ee36?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'grayscale', 'photo']),
    verifiedAsset('PIF0x4cyoN4', 'https://images.unsplash.com/photo-1688744249266-3718f88f0e20?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people']),
    verifiedAsset('jc9UD4JQFRQ', 'https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'woman', 'white']),
    verifiedAsset('6xIMAcL6cdc', 'https://images.unsplash.com/photo-1688632106590-39547edc1112?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people']),
    verifiedAsset('o3KQX_VLhVY', 'https://images.unsplash.com/photo-1583668023935-b79e1c1af0a2?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'man', 'white']),
    verifiedAsset('1jOQNSc4P-c', 'https://images.unsplash.com/photo-1607031767898-5f319512ff1e?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'boy', 'white']),
    verifiedAsset('HHechVrIhf8', 'https://images.unsplash.com/photo-1601878458406-a80adc9b3e61?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'people', 'white']),
    verifiedAsset('mCXfyKrP9kc', 'https://images.unsplash.com/photo-1643773417829-c01c8229d490?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'man', 'kneeling']),
    verifiedAsset('uGbG4LnMFMY', 'https://images.unsplash.com/photo-1530417838433-4b24dd3f72d4?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'man', 'and']),
    verifiedAsset('b24JhTZlxSg', 'https://images.unsplash.com/photo-1583668006690-ffc215fd5264?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'women', 'white'], false),
    verifiedAsset('FuQwi_A6TKs', 'https://images.unsplash.com/photo-1738835935023-ebff4a85bc7e?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people'], false),
    verifiedAsset('_Y6DIBvwyoI', 'https://images.unsplash.com/photo-1738835934988-ed0d238e8299?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'men'], false),
    verifiedAsset('AxEagdApVXc', 'https://images.unsplash.com/photo-1542937306-0a804f0ad7b7?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'two', 'men'], false),
    verifiedAsset('80H7Ce83y-I', 'https://images.unsplash.com/photo-1699464676088-c6349d19b013?w=1600&auto=format&fit=crop', 'martial_arts', ['karate', 'kids', 'dojo', 'group', 'people'], false),
  ],
  pizza: [
    verifiedAsset('qVOtaDNIOlI', 'https://images.unsplash.com/photo-1724232822245-f430d53466e0?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'table', 'topped']),
    verifiedAsset('as8rLtJarwo', 'https://images.unsplash.com/photo-1719777824150-8df4eb6795c4?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'table', 'topped']),
    verifiedAsset('Wz3u9_GtkWc', 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'baked']),
    verifiedAsset('XfIbOF19g68', 'https://images.unsplash.com/photo-1651978595428-ce1c3b3cc493?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'plate', 'food']),
    verifiedAsset('Z1n3HzOejKc', 'https://images.unsplash.com/photo-1651978595438-980213ca6d3d?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'fire', 'fireplace']),
    verifiedAsset('H7iRN37MUEI', 'https://images.unsplash.com/photo-1642920040247-7e0447595995?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'and', 'drink']),
    verifiedAsset('N14YLMviMCM', 'https://images.unsplash.com/photo-1621702379146-3c084cb0bfaa?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'person', 'holding']),
    verifiedAsset('KHDGp47y1KI', 'https://images.unsplash.com/photo-1621702377218-80264cd9fd38?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'with', 'green']),
    verifiedAsset('MCfD3z8B8II', 'https://images.unsplash.com/photo-1682013951909-7e76b54cbdcf?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'pepperoni', 'sitting']),
    verifiedAsset('Ct5LgFGvYvU', 'https://images.unsplash.com/photo-1567349077939-101215abd8ec?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'red', 'tomatoes']),
    verifiedAsset('MZWRiMyPLAc', 'https://images.unsplash.com/photo-1672596468079-2a257c139ede?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'view', 'through'], false),
    verifiedAsset('SXIKVAR9r9Y', 'https://images.unsplash.com/photo-1753727470819-68332ed29d89?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'and', 'drink'], false),
    verifiedAsset('sIsvIqAYUdI', 'https://images.unsplash.com/photo-1694184192690-b8eaa2190fb8?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'sitting', 'top'], false),
    verifiedAsset('K7Eeh-mE1cw', 'https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'couple', 'pizzas'], false),
    verifiedAsset('0fmiFfzRhQY', 'https://images.unsplash.com/photo-1563245738-9169ff58eccf?w=1600&auto=format&fit=crop', 'pizza', ['pizza', 'restaurant', 'italian', 'cooked', 'pizzas'], false),
  ],
  burger: [
    verifiedAsset('AeA2fS6xbCU', 'https://images.unsplash.com/photo-1565464213795-f35a3d535023?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'rectangular', 'brown']),
    verifiedAsset('_amp2hHdEzc', 'https://images.unsplash.com/photo-1672742897807-cfb9156693ed?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'green', 'wall']),
    verifiedAsset('ARDTvCmiylA', 'https://images.unsplash.com/photo-1768204039006-d1114005e0f9?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'juicy', 'cheeseburger']),
    verifiedAsset('EgG7kbgtsF8', 'https://images.unsplash.com/photo-1601769544353-3af8a960ad56?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'with', 'lettuce']),
    verifiedAsset('9mRfxH8nB3U', 'https://images.unsplash.com/photo-1562452978-7880eaaa2322?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'person', 'holding']),
    verifiedAsset('AfS9MPa2aCg', 'https://images.unsplash.com/photo-1733860493787-0bcb12e933d3?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'hand', 'reaching']),
    verifiedAsset('6nPusAuBdOw', 'https://images.unsplash.com/photo-1639020715088-e7afebe6cb25?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'cheeseburger', 'with']),
    verifiedAsset('rety0WWquRE', 'https://images.unsplash.com/photo-1705131186344-beaed61d95b4?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'hamburger', 'sitting']),
    verifiedAsset('gI1s9iAgAB4', 'https://images.unsplash.com/photo-1616420812082-1ff2334daf57?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'brown', 'and']),
    verifiedAsset('MocvvWyzNzQ', 'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'brown', 'wooden']),
    verifiedAsset('NTJoAKxyxc0', 'https://images.unsplash.com/photo-1639020715359-f03b05835829?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'cheeseburger', 'bun'], false),
    verifiedAsset('oPhJ3-3AEmc', 'https://images.unsplash.com/photo-1567361910466-370cb595c737?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'hamburger', 'white'], false),
    verifiedAsset('fEaZ6bHMLlA', 'https://images.unsplash.com/photo-1597296173397-751af4da6755?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'with', 'cheese'], false),
    verifiedAsset('MYiT2IRkHkw', 'https://images.unsplash.com/photo-1666243192193-2c5cd74bdf17?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'table', 'for'], false),
    verifiedAsset('D2KfM-eXY78', 'https://images.unsplash.com/photo-1669281645377-71e97d235fb6?w=1600&auto=format&fit=crop', 'burger', ['burger', 'smash', 'burger', 'knife', 'top'], false),
  ],
  taco_mexican: [
    verifiedAsset('ADKR5qm4Gy4', 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'two', 'plate']),
    verifiedAsset('Ic0TTwMHblw', 'https://images.unsplash.com/photo-1643244229837-cee6752e1df1?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'man', 'sitting']),
    verifiedAsset('6WHl6T-fxU0', 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'person', 'holding']),
    verifiedAsset('E2n6-GuBGYo', 'https://images.unsplash.com/photo-1619301920463-a37f1764eb83?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'burger', 'with']),
    verifiedAsset('lOM_DkOU8PY', 'https://images.unsplash.com/photo-1703623339850-5793bfa23d80?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'close', 'plate']),
    verifiedAsset('4p5t91rONXE', 'https://images.unsplash.com/photo-1663626913917-8a638838905e?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'plate']),
    verifiedAsset('_Oo4ZSYQM3A', 'https://images.unsplash.com/photo-1629304881031-05f1ea6ee406?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'person', 'holding']),
    verifiedAsset('vvLZkwwsHeY', 'https://images.unsplash.com/photo-1673298343885-af23f0fae167?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'white', 'plate']),
    verifiedAsset('JiRSy0GfqPA', 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'close-up', 'photography']),
    verifiedAsset('lc8BpLcljz4', 'https://images.unsplash.com/photo-1613409385222-3d0decb6742a?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'vegetable', 'salad']),
    verifiedAsset('5mpht0M5H0E', 'https://images.unsplash.com/photo-1683062332605-4e1209d75346?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'three', 'are'], false),
    verifiedAsset('ItxirpkS020', 'https://images.unsplash.com/photo-1585112799768-bb129fd10250?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'sliced', 'bread'], false),
    verifiedAsset('Eve2qPqRUyg', 'https://images.unsplash.com/photo-1667591861997-968ed6bf4335?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'close-up', 'some'], false),
    verifiedAsset('cLlC5qi8F4w', 'https://images.unsplash.com/photo-1703623409191-dfdd5664e222?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'plate', 'wooden'], false),
    verifiedAsset('KWV-BNJAXN4', 'https://images.unsplash.com/photo-1595443339479-9d1bb7d65b60?w=1600&auto=format&fit=crop', 'taco_mexican', ['tacos', 'mexican', 'food', 'red', 'and'], false),
  ],
  dental: [
    verifiedAsset('Fdku_oMrDvk', 'https://images.unsplash.com/photo-1704455306251-b4634215d98f?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'room', 'with']),
    verifiedAsset('4SUyx4KQ5Ik', 'https://images.unsplash.com/photo-1609207825181-52d3214556dd?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'man', 'blue']),
    verifiedAsset('loBRFqXm1QA', 'https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'boy', 'blue']),
    verifiedAsset('_9b4WKR_u9I', 'https://images.unsplash.com/photo-1619236200199-2c138e4a5fae?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'woman', 'black']),
    verifiedAsset('9F83toLNfkA', 'https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'examining', 'patients']),
    verifiedAsset('RR9Le91W98w', 'https://images.unsplash.com/photo-1619236233405-bb5d430f0620?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'woman', 'black']),
    verifiedAsset('I-kDEBUMAaQ', 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'red', 'and']),
    verifiedAsset('y8fWicGsv4g', 'https://images.unsplash.com/photo-1619988252418-a1e6ee10b122?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'stainless', 'steel']),
    verifiedAsset('w9C2A4LXu4o', 'https://images.unsplash.com/photo-1758205307912-5896ff0c65ae?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'examining', 'patients']),
    verifiedAsset('I_tiqvkfVq8', 'https://images.unsplash.com/photo-1758812821349-1d2a4a96eecd?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'vintage', 'clinic']),
    verifiedAsset('6SAzfKla3IE', 'https://images.unsplash.com/photo-1621516799962-7dad52802428?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'yellow', 'and'], false),
    verifiedAsset('ZFVM6UH-re4', 'https://images.unsplash.com/photo-1758205307788-b61e4f225d10?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'surgeon', 'wearing'], false),
    verifiedAsset('e7MJLM5VGjY', 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'white', 'ceramic'], false),
    verifiedAsset('u-z6s-gnYDQ', 'https://images.unsplash.com/photo-1770321119305-f191c09c5801?w=1600&auto=format&fit=crop', 'dental', ['dentist', 'dental', 'office', 'equipment', 'with'], false),
  ],
  gym_fitness: [
    verifiedAsset('BXzVcS33-A0', 'https://images.unsplash.com/photo-1750698544932-c7471990f1ca?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'working']),
    verifiedAsset('UkP3YJW74Ew', 'https://images.unsplash.com/photo-1584827387179-355517d8a5fb?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'purple', 'glass']),
    verifiedAsset('El0GmT1Bpm4', 'https://images.unsplash.com/photo-1610456756490-0f7069c202d7?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'green']),
    verifiedAsset('QFjlC7nasr0', 'https://images.unsplash.com/photo-1750521280541-bbf9d813a890?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'lifts']),
    verifiedAsset('Da94Wb7FupM', 'https://images.unsplash.com/photo-1750521279808-f66baaed923d?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'man', 'works']),
    verifiedAsset('gP9rAnGJBRo', 'https://images.unsplash.com/photo-1620188526357-ff08e03da266?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'close', 'barbell']),
    verifiedAsset('qPqBV-FhoUQ', 'https://images.unsplash.com/photo-1752247704640-6fe8e51cfc01?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'weightlifting', 'straps']),
    verifiedAsset('175WMFRMoOA', 'https://images.unsplash.com/photo-1627257058769-0a99529e4312?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'black', 'and']),
    verifiedAsset('vc09nUKk5xI', 'https://images.unsplash.com/photo-1689876593463-6678f2e8d4f2?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'overhead', 'view']),
    verifiedAsset('gzeTjGu3b_k', 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'barbell', 'rack']),
    verifiedAsset('1RNQ11ZODJM', 'https://images.unsplash.com/photo-1689877020200-403d8542d95d?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'filled', 'with'], false),
    verifiedAsset('U5kQvbQWoG0', 'https://images.unsplash.com/photo-1434596922112-19c563067271?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'woman', 'holding'], false),
    verifiedAsset('I72QeY20Q7o', 'https://images.unsplash.com/photo-1584827386894-fc939dad6078?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'black', 'and'], false),
    verifiedAsset('Il9YbhIBiOA', 'https://images.unsplash.com/photo-1741156229623-da94e6d7977d?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'weights', 'and'], false),
    verifiedAsset('udE7Kh7QHbM', 'https://images.unsplash.com/photo-1584827387150-8ae4caebe906?w=1600&auto=format&fit=crop', 'gym_fitness', ['gym', 'fitness', 'workout', 'black', 'dumbbells'], false),
  ],
  yoga_pilates: [
    verifiedAsset('pi_RiEK2J1Q', 'https://images.unsplash.com/photo-1767611094402-2b28863b834f?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing']),
    verifiedAsset('5EX5H5enXFs', 'https://images.unsplash.com/photo-1761971975047-6426232852ed?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'pose']),
    verifiedAsset('oaJaBFVMUQ4', 'https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'modern', 'with']),
    verifiedAsset('IjX2StadENA', 'https://images.unsplash.com/photo-1775742339887-e5a0029e27e2?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'various', 'signs']),
    verifiedAsset('zGuL74wQOBM', 'https://images.unsplash.com/photo-1754258166661-b827f0d558aa?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing']),
    verifiedAsset('-XuG2BfYIVE', 'https://images.unsplash.com/photo-1754258167521-233d03caa23a?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing']),
    verifiedAsset('iyV-7sFHwXI', 'https://images.unsplash.com/photo-1754258167836-6878c54e316c?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'practices']),
    verifiedAsset('7LluSbQhULA', 'https://images.unsplash.com/photo-1620643089599-d0d1246217b5?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'brown', 'and']),
    verifiedAsset('3FdXv58Wsag', 'https://images.unsplash.com/photo-1754258167278-4a91a38a4bd9?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'does']),
    verifiedAsset('LhEQmm4flyE', 'https://images.unsplash.com/photo-1754258166811-5a09a47800b4?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'does']),
    verifiedAsset('PC0V3nl14UE', 'https://images.unsplash.com/photo-1754258166780-c20a15d43798?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing'], false),
    verifiedAsset('lriXRISG-m0', 'https://images.unsplash.com/photo-1754258166816-0075fe0132ce?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'working'], false),
    verifiedAsset('0fiVrPJg5kU', 'https://images.unsplash.com/photo-1717500252179-2811af29e4f7?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'doing'], false),
    verifiedAsset('Qh3zjjW0bPA', 'https://images.unsplash.com/photo-1611077094612-943a95a2708b?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'woman', 'black'], false),
    verifiedAsset('cPwpEOvwAl4', 'https://images.unsplash.com/photo-1717500252780-036bfd89f810?w=1600&auto=format&fit=crop', 'yoga_pilates', ['yoga', 'studio', 'pilates', 'group', 'people'], false),
  ],
  salon_barber: [
    verifiedAsset('CgaS2F59yqw', 'https://images.unsplash.com/photo-1641230846322-caa4939d2cb1?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'woman', 'getting']),
    verifiedAsset('MUdB4YzDeKA', 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'white']),
    verifiedAsset('J99pG-3RHwc', 'https://images.unsplash.com/photo-1593702295094-aea22597af65?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'white']),
    verifiedAsset('arxAZJT5k2A', 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'shaving']),
    verifiedAsset('2ZjKLOe7vOI', 'https://images.unsplash.com/photo-1615011968353-0392c495eed3?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'woman', 'black']),
    verifiedAsset('OKzNB_nhj9k', 'https://images.unsplash.com/photo-1767201181862-40590dc7c229?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'shop', 'sign']),
    verifiedAsset('wT8lsNXUsM8', 'https://images.unsplash.com/photo-1514178320695-089eff7b8aa8?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'sitting']),
    verifiedAsset('DN9j84Zrd5Q', 'https://images.unsplash.com/photo-1648313143880-52cfd6216038?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'woman', 'cutting']),
    verifiedAsset('3McoeLy3M8s', 'https://images.unsplash.com/photo-1648243652780-c7f10cf8d33a?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'getting']),
    verifiedAsset('yZv67D-_t2U', 'https://images.unsplash.com/photo-1682255867893-d8d48edf5ce8?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'building', 'that']),
    verifiedAsset('po3kb8d1vts', 'https://images.unsplash.com/photo-1648313143853-aa913f6ad44a?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'man', 'getting'], false),
    verifiedAsset('GvSsskFKbvI', 'https://images.unsplash.com/photo-1754294437661-129b86f868ea?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'barbershop', 'mirror'], false),
    verifiedAsset('yPjCWlfhumc', 'https://images.unsplash.com/photo-1647462742033-f4e39fa481b1?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'close', 'brush'], false),
    verifiedAsset('PbooBbLNMcw', 'https://images.unsplash.com/photo-1766650551497-21d861ca77da?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'mannequin', 'wearing'], false),
    verifiedAsset('vI3m5UnZ0aQ', 'https://images.unsplash.com/photo-1514336937476-a5b961020a5c?w=1600&auto=format&fit=crop', 'salon_barber', ['hair', 'salon', 'barber', 'person', 'trimming'], false),
  ],
  coffee_cafe: [
    verifiedAsset('pnD0_xkprRw', 'https://images.unsplash.com/photo-1642647916129-3909c75c0267?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'long', 'bench']),
    verifiedAsset('3PZuuhPvjG4', 'https://images.unsplash.com/photo-1604552584409-44de624c9f57?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'yellow', 'plastic']),
    verifiedAsset('zmUEyAPaPmo', 'https://images.unsplash.com/photo-1642647916334-82e513d9cc48?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'counter', 'restaurant']),
    verifiedAsset('StqkjF-SfoY', 'https://images.unsplash.com/photo-1642647915493-03b72308d002?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'man', 'sitting']),
    verifiedAsset('elGmeU87Ofw', 'https://images.unsplash.com/photo-1660203861072-318f2c468d94?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'kitchen', 'with']),
    verifiedAsset('faI98xOXOYE', 'https://images.unsplash.com/photo-1543745503-c03673999b29?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'powered-on', 'pendant']),
    verifiedAsset('S32QLE6DZPQ', 'https://images.unsplash.com/photo-1726678640183-2b64ed27ffdf?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'store', 'front']),
    verifiedAsset('S-bLFn0YnEM', 'https://images.unsplash.com/photo-1744242541710-11136133b0bb?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'antique', 'grinder']),
    verifiedAsset('ie2Nh1CIwHg', 'https://images.unsplash.com/photo-1650300817493-26c8f88879dc?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'counter', 'top']),
    verifiedAsset('WbLbIkM4ePw', 'https://images.unsplash.com/photo-1681287622084-a9f12b203f4b?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'restaurant', 'sign']),
    verifiedAsset('gK9O0apJOH0', 'https://images.unsplash.com/photo-1657043318379-4899adc3f9c8?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'stove', 'with'], false),
    verifiedAsset('04-eXFoqvac', 'https://images.unsplash.com/photo-1651036398355-78a821ef0f20?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'dining', 'room'], false),
    verifiedAsset('VgQmjH52BYo', 'https://images.unsplash.com/photo-1657050542933-92199a113156?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'person', 'standing'], false),
    verifiedAsset('PoG2cCucTHE', 'https://images.unsplash.com/photo-1657050786286-ac2169a095a2?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'shelf', 'with'], false),
    verifiedAsset('kr1OiK6KYfI', 'https://images.unsplash.com/photo-1583124252465-d281e51012bf?w=1600&auto=format&fit=crop', 'coffee_cafe', ['coffee', 'shop', 'cafe', 'man', 'black'], false),
  ],
  landscaping: [
    verifiedAsset('EkhWxU_pgLo', 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'green']),
    verifiedAsset('Ub-GUnTVFfw', 'https://images.unsplash.com/photo-1734303023518-71e656574f50?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'orange']),
    verifiedAsset('bsld7GjQwjI', 'https://images.unsplash.com/photo-1734303023491-db8037a21f09?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'mowing']),
    verifiedAsset('RjxqFCXpt2c', 'https://images.unsplash.com/photo-1770664945615-52203ab54c88?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'sprinklers', 'watering']),
    verifiedAsset('Th6YChjkr5U', 'https://images.unsplash.com/photo-1662511505193-35467b5f1363?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'carriage', 'brick']),
    verifiedAsset('HGY_RHy2Ct0', 'https://images.unsplash.com/photo-1761958151634-2faec6ce4d9a?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'person', 'waters']),
    verifiedAsset('wk5kis1oUY8', 'https://images.unsplash.com/photo-1733360485757-397b343c4268?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'path', 'the']),
    verifiedAsset('IClVRn6PEQk', 'https://images.unsplash.com/photo-1766246721288-abda35d6d20d?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'white', 'tower']),
    verifiedAsset('KuVIfC7mtDc', 'https://images.unsplash.com/photo-1761502244239-9bcbeeffd870?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'building', 'and']),
    verifiedAsset('6vtmw3NS0u4', 'https://images.unsplash.com/photo-1759496607068-f2892afdaf23?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'man', 'walks']),
    verifiedAsset('cWEVSZhPYm0', 'https://images.unsplash.com/photo-1768264312532-7780b660b74a?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'young', 'boy'], false),
    verifiedAsset('UN1r27xGLO8', 'https://images.unsplash.com/photo-1774291635063-898534da7c82?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'forklift', 'loading'], false),
    verifiedAsset('OcTlF4oNXHU', 'https://images.unsplash.com/photo-1764173040102-e05b4e3b4587?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'gardener', 'with'], false),
    verifiedAsset('2s4U6Rky1BY', 'https://images.unsplash.com/photo-1774291635035-9d55a6ea45d7?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'forklift', 'loading'], false),
    verifiedAsset('1ATmPeumVNc', 'https://images.unsplash.com/photo-1774291816792-7c42665f2129?w=1600&auto=format&fit=crop', 'landscaping', ['landscaping', 'lawn', 'care', 'large', 'yellow'], false),
  ],
  roofing: [
    verifiedAsset('eFOkg4ZMiBs', 'https://images.unsplash.com/photo-1635424824800-692767998d07?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'yellow']),
    verifiedAsset('Scaj0T40nFI', 'https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'working']),
    verifiedAsset('umJz4M-iCOw', 'https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'couple', 'men']),
    verifiedAsset('GXITWKvgm-k', 'https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'with']),
    verifiedAsset('4XMHsy4Rvi8', 'https://images.unsplash.com/photo-1643225523483-e2c434191bba?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'riding']),
    verifiedAsset('G2J41LRaKkE', 'https://images.unsplash.com/photo-1726589004565-bedfba94d3a2?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'roof']),
    verifiedAsset('RGkNFjRPyO0', 'https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'two', 'men']),
    verifiedAsset('63QXU8HtxTQ', 'https://images.unsplash.com/photo-1654848232800-20fbc9cdbc10?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'group', 'houses']),
    verifiedAsset('MyBBMM317A4', 'https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'couple', 'people']),
    verifiedAsset('4zwozQxDbD4', 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'walking']),
    verifiedAsset('-1l0iZaM8ms', 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'man', 'standing'], false),
    verifiedAsset('d4j5hns6sj8', 'https://images.unsplash.com/photo-1740825961434-e9287638592b?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'two', 'construction'], false),
    verifiedAsset('k3zOUWvZWgc', 'https://images.unsplash.com/photo-1698849938162-f234a73f1ac2?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'close', 'roof'], false),
    verifiedAsset('HgzDl6c6ueo', 'https://images.unsplash.com/photo-1580775815403-931167518e08?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'gray', 'and'], false),
    verifiedAsset('rnr834gRQ0s', 'https://images.unsplash.com/photo-1676213566618-1edd3fe2c191?w=1600&auto=format&fit=crop', 'roofing', ['roofing', 'contractor', 'the', 'roof'], false),
  ],
  auto_repair: [
    verifiedAsset('vlUnqYZIr9E', 'https://images.unsplash.com/photo-1631720040176-0d789a643a78?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'garage', 'with']),
    verifiedAsset('I6pqshymjOw', 'https://images.unsplash.com/photo-1770656505709-fd97236989b9?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'working', 'car']),
    verifiedAsset('lJj2QwH8twE', 'https://images.unsplash.com/photo-1741827866663-6ad8ec20480c?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'wrench', 'with']),
    verifiedAsset('9gB7APNSquE', 'https://images.unsplash.com/photo-1775590766345-c117265f0c1b?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'using', 'wrench']),
    verifiedAsset('WyOOWptd7so', 'https://images.unsplash.com/photo-1661745805708-9c4a831545a7?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'holding', 'motorcycle']),
    verifiedAsset('DlgQBt3GK2k', 'https://images.unsplash.com/photo-1745034989268-cb01b1f6f704?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'blurred', 'rickshaw']),
    verifiedAsset('Fd6osyVbtG4', 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'grayscale', 'photo']),
    verifiedAsset('WuOdwlPKzAM', 'https://images.unsplash.com/photo-1767339736247-582fcf11442b?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'working', 'car']),
    verifiedAsset('V8oE1K5memI', 'https://images.unsplash.com/photo-1770656505767-32ed52b1a8ca?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'using', 'screwdriver']),
    verifiedAsset('DOAbIkd2SGo', 'https://images.unsplash.com/photo-1742899840385-94c8a667f52b?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'old', 'snow-covered']),
    verifiedAsset('bDDKGSR6dw4', 'https://images.unsplash.com/photo-1751948694045-4b824193b992?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'rickshaw', 'parked'], false),
    verifiedAsset('h8ROAaEjYrM', 'https://images.unsplash.com/photo-1767339736233-f4b02c41ee4a?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'working', 'car'], false),
    verifiedAsset('gW34cv-Ojjs', 'https://images.unsplash.com/photo-1771340742493-52fbd5476ccb?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'pouring', 'oil'], false),
    verifiedAsset('VdXnpwrp1qc', 'https://images.unsplash.com/photo-1767681092416-bccf9410bda4?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'cars', 'being'], false),
    verifiedAsset('oucLDFP-Ex0', 'https://images.unsplash.com/photo-1770656505727-45268ba7200a?w=1600&auto=format&fit=crop', 'auto_repair', ['auto', 'repair', 'mechanic', 'person', 'using'], false),
  ],
  cleaning: [
    verifiedAsset('saXBWyQoXFU', 'https://images.unsplash.com/photo-1620563671147-979557991e5a?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'girl', 'teal']),
    verifiedAsset('aO1d0C5bi2k', 'https://images.unsplash.com/photo-1620564074310-30a0388b396b?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'black']),
    verifiedAsset('cWuzPLSnEP8', 'https://images.unsplash.com/photo-1590826885939-4b1f843707ab?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'red', 'and']),
    verifiedAsset('Y3vDCL7_das', 'https://images.unsplash.com/photo-1758272421751-963195322eaa?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'wearing']),
    verifiedAsset('2RpE13rIbAM', 'https://images.unsplash.com/photo-1758273238594-9a9d6c20eaa2?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'mopping']),
    verifiedAsset('S_9orb3OuOw', 'https://images.unsplash.com/photo-1758273705433-d1485e8f00e0?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'singing']),
    verifiedAsset('Uvf-sHh0eAY', 'https://images.unsplash.com/photo-1758273238795-c284e5ae09b6?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with']),
    verifiedAsset('4pOfO0XUybs', 'https://images.unsplash.com/photo-1758273238370-3bc08e399620?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'happily']),
    verifiedAsset('o8Lyc1is43k', 'https://images.unsplash.com/photo-1758273238903-b5ca5f9988d1?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with']),
    verifiedAsset('2NcTLdFHpH8', 'https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'mops']),
    verifiedAsset('KPKt9et9vJc', 'https://images.unsplash.com/photo-1758273705438-2bb9e0eb21b7?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with'], false),
    verifiedAsset('H0zuH57Fs-I', 'https://images.unsplash.com/photo-1758273238847-bc2c2548e210?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'person', 'happily'], false),
    verifiedAsset('YWS51jdrfdA', 'https://images.unsplash.com/photo-1758272422155-d898efd14f81?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with'], false),
    verifiedAsset('h_cGl2nIzng', 'https://images.unsplash.com/photo-1758273238698-c98a45a8df9a?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'with'], false),
    verifiedAsset('cvWfWVHRBe0', 'https://images.unsplash.com/photo-1758273238738-9410f7e9d53c?w=1600&auto=format&fit=crop', 'cleaning', ['house', 'cleaning', 'service', 'woman', 'wearing'], false),
  ],
  law: [
    verifiedAsset('n4CLHNL5n6Y', 'https://images.unsplash.com/photo-1584556326561-c8746083993b?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'person', 'using']),
    verifiedAsset('iPheGw7_UaI', 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'business', 'people']),
    verifiedAsset('qY_Kdc-Xi40', 'https://images.unsplash.com/photo-1775144657610-9a6f171e522f?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'ornate', 'with']),
    verifiedAsset('0y2FXSJ70sc', 'https://images.unsplash.com/photo-1775144657626-29ff0a46ca90?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'grand', 'with']),
    verifiedAsset('bEAvHnaC64s', 'https://images.unsplash.com/photo-1775144657566-e5b093073baf?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'elegant', 'with']),
    verifiedAsset('hn6k00wZxr8', 'https://images.unsplash.com/photo-1762151662378-f40e20901824?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'glasses', 'and']),
    verifiedAsset('tjd5CfdDPRA', 'https://images.unsplash.com/photo-1571055931484-22dce9d6c510?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'five', 'black']),
    verifiedAsset('NfHuzWJW5PA', 'https://images.unsplash.com/photo-1758310999515-645097b709db?w=1600&auto=format&fit=crop', 'law', ['law', 'office', 'attorney', 'brick', 'building']),
  ],
  real_estate: [
    verifiedAsset('rgJ1J8SDEAY', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'white', 'and']),
    verifiedAsset('oFMI6CdD7yU', 'https://images.unsplash.com/photo-1616587896595-51352538155b?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'man', 'and']),
    verifiedAsset('jpHw8ndwJ_Q', 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'two', 'men']),
    verifiedAsset('h1RW-NFtUyc', 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'man', 'sitting']),
    verifiedAsset('jJnZg7vBfMs', 'https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'keys', 'hand']),
    verifiedAsset('05XcCfTOzN4', 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'man', 'purple']),
    verifiedAsset('R2mMFDpe1eM', 'https://images.unsplash.com/photo-1728825445493-1a6e89164511?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'calculator', 'keychain']),
    verifiedAsset('NpTbVOkkom8', 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'white', 'and']),
    verifiedAsset('5fNmWej4tAA', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'person', 'holding']),
    verifiedAsset('r3WAWU5Fi5Q', 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'aerial', 'photography']),
    verifiedAsset('W8z6aiwfi1E', 'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'man', 'black'], false),
    verifiedAsset('GQn9GnMkVQg', 'https://images.unsplash.com/photo-1724482606633-fa74fe4f5de1?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'person', 'putting'], false),
    verifiedAsset('OQMZwNd3ThU', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'man', 'writing'], false),
    verifiedAsset('FlPc9_VocJ4', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'person', 'using'], false),
    verifiedAsset('ZZdsJmzuerA', 'https://images.unsplash.com/photo-1729505305192-610539203144?w=1600&auto=format&fit=crop', 'real_estate', ['real', 'estate', 'agent', 'person', 'holding'], false),
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
