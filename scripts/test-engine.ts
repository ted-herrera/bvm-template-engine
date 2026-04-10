import { resolveImagesAtIntake } from '../lib/studio-engine'
import { getImagePool } from '../lib/photo-library'
import { runPostflight, preflightCheck, PostflightInput } from '../lib/postflight-validator'

async function main() {
  console.log('═══════════════════════════════════════════════════')
  console.log('  BVM IMAGE ENGINE — LIVE END-TO-END TESTS')
  console.log('═══════════════════════════════════════════════════\n')

  // ────────────────────────────────────────────────
  // TEST 1: Champions Karate Academy
  // ────────────────────────────────────────────────
  console.log('──── TEST 1: Champions Karate Academy ────')
  const site1 = resolveImagesAtIntake(
    'site-karate-001',
    'Champions Karate Academy',
    'martial arts',
    'kids martial arts and self defense, Tulsa OK',
  )

  console.log(`  subtype:        ${site1.classification.subtype}`)
  console.log(`  primaryCategory:${site1.classification.primaryCategory}`)
  console.log(`  matchedTerm:    "${site1.classification.matchedTerm}"`)
  console.log(`  confidence:     ${site1.classification.confidence}`)
  console.log(`  escalate:       ${site1.escalate}`)
  console.log(`  heroImage:`)
  console.log(`    id:    ${site1.heroImage.id}`)
  console.log(`    url:   ${site1.heroImage.url}`)
  console.log(`    tags:  [${site1.heroImage.tags.join(', ')}]`)
  console.log(`    subtype: ${site1.heroImage.subtype}`)

  // Verify hero is in the martial_arts pool, NOT gym_fitness
  const maPool = getImagePool('martial_arts')
  const maIds = maPool.map(p => p.id)
  const gymPool = getImagePool('gym_fitness')
  const gymIds = gymPool.map(p => p.id)
  const heroInMA = maIds.includes(site1.heroImage.id)
  const heroInGym = gymIds.includes(site1.heroImage.id)
  console.log(`  ✓ hero in martial_arts pool: ${heroInMA}`)
  console.log(`  ✗ hero in gym_fitness pool:  ${heroInGym}`)

  // Preflight check
  const pf1Input: PostflightInput = {
    businessName: 'Champions Karate Academy',
    subtype: site1.classification.subtype,
    heroImage: { id: site1.heroImage.id, tags: site1.heroImage.tags },
    serviceLabels: ['Kids Karate', 'Adult Self Defense', 'Belt Testing'],
    headlineText: 'Build Confidence. Build Strength.',
    ctaCopy: 'Book a Free Trial Class',
    trustBadges: ['Certified Instructors', 'Kids & Adults', 'Safe Training', 'Discipline & Respect'],
    renderedHtml: '<html><body><h1>Champions Karate Academy</h1><p>Kids martial arts and self defense in Tulsa</p></body></html>',
  }
  const pre1 = preflightCheck(pf1Input)
  console.log(`  preflight pass: ${pre1.pass}`)
  if (pre1.issues.length) console.log(`  preflight issues: ${pre1.issues.join('; ')}`)

  // Full postflight
  console.log('  Running postflight validator (Claude API)...')
  const post1 = await runPostflight(pf1Input)
  console.log('  postflight result:')
  console.log(JSON.stringify(post1, null, 4))
  console.log(`\n  TEST 1 VERDICT:`)
  console.log(`    subtype correct (martial_arts): ${site1.classification.subtype === 'martial_arts' ? 'PASS' : 'FAIL — got ' + site1.classification.subtype}`)
  console.log(`    hero from correct pool:         ${heroInMA && !heroInGym ? 'PASS' : 'FAIL'}`)
  console.log(`    not escalated:                  ${!site1.escalate ? 'PASS' : 'FAIL'}`)
  console.log(`    postflight decision:             ${post1.decision}`)
  console.log(`    categoryAlignment:               ${post1.categoryAlignment}`)
  console.log('')

  // ────────────────────────────────────────────────
  // TEST 2: Tony's Pizza
  // ────────────────────────────────────────────────
  console.log('──── TEST 2: Tony\'s Pizza ────')
  const site2 = resolveImagesAtIntake(
    'site-pizza-001',
    "Tony's Pizza",
    'pizza',
    'New York style pizza and takeout, Tulsa OK',
  )

  console.log(`  subtype:        ${site2.classification.subtype}`)
  console.log(`  primaryCategory:${site2.classification.primaryCategory}`)
  console.log(`  matchedTerm:    "${site2.classification.matchedTerm}"`)
  console.log(`  confidence:     ${site2.classification.confidence}`)
  console.log(`  escalate:       ${site2.escalate}`)
  console.log(`  heroImage:`)
  console.log(`    id:    ${site2.heroImage.id}`)
  console.log(`    url:   ${site2.heroImage.url}`)
  console.log(`    tags:  [${site2.heroImage.tags.join(', ')}]`)
  console.log(`    subtype: ${site2.heroImage.subtype}`)

  // Verify hero is in the pizza pool, NOT generic restaurant/food_takeout
  const pizzaPool = getImagePool('pizza')
  const pizzaIds = pizzaPool.map(p => p.id)
  const takeoutPool = getImagePool('food_takeout')
  const takeoutIds = takeoutPool.map(p => p.id)
  const heroInPizza = pizzaIds.includes(site2.heroImage.id)
  const heroInTakeout = takeoutIds.includes(site2.heroImage.id)
  console.log(`  ✓ hero in pizza pool:       ${heroInPizza}`)
  console.log(`  ✗ hero in food_takeout pool: ${heroInTakeout}`)

  const pf2Input: PostflightInput = {
    businessName: "Tony's Pizza",
    subtype: site2.classification.subtype,
    heroImage: { id: site2.heroImage.id, tags: site2.heroImage.tags },
    serviceLabels: ['New York Style Pizza', 'Calzones & Stromboli', 'Delivery & Takeout'],
    headlineText: 'Real Pizza. Real Ingredients.',
    ctaCopy: 'Order Now',
    trustBadges: ['Fresh Dough Daily', 'Local Ingredients', 'Fast Delivery', 'Family Recipes'],
    renderedHtml: '<html><body><h1>Tony\'s Pizza</h1><p>New York style pizza and takeout in Tulsa</p></body></html>',
  }
  const pre2 = preflightCheck(pf2Input)
  console.log(`  preflight pass: ${pre2.pass}`)
  if (pre2.issues.length) console.log(`  preflight issues: ${pre2.issues.join('; ')}`)

  console.log('  Running postflight validator (Claude API)...')
  const post2 = await runPostflight(pf2Input)
  console.log('  postflight result:')
  console.log(JSON.stringify(post2, null, 4))
  console.log(`\n  TEST 2 VERDICT:`)
  console.log(`    subtype correct (pizza):   ${site2.classification.subtype === 'pizza' ? 'PASS' : 'FAIL — got ' + site2.classification.subtype}`)
  console.log(`    hero from pizza pool:      ${heroInPizza ? 'PASS' : 'FAIL'}`)
  console.log(`    not escalated:             ${!site2.escalate ? 'PASS' : 'FAIL'}`)
  console.log(`    postflight decision:        ${post2.decision}`)
  console.log(`    categoryAlignment:          ${post2.categoryAlignment}`)
  console.log('')

  // ────────────────────────────────────────────────
  // TEST 3: Forced mismatch (dental + pizza hero)
  // ────────────────────────────────────────────────
  console.log('──── TEST 3: Forced Mismatch (dental site + pizza hero) ────')
  const pf3Input: PostflightInput = {
    businessName: 'Bright Smile Dental',
    subtype: 'dental',
    heroImage: { id: 'pizza-photo-fake', tags: ['pizza', 'food', 'restaurant'] },
    serviceLabels: ['Teeth Cleaning', 'Orthodontics', 'Whitening'],
    headlineText: 'Your Best Smile Starts Here',
    ctaCopy: 'Schedule Your Appointment',
    trustBadges: ['Gentle Care', 'Modern Technology', 'Family Friendly', 'Insurance Accepted'],
    renderedHtml: '<html><body><h1>Bright Smile Dental</h1><p>General dentistry and cosmetic services</p><img src="pizza.jpg" /></body></html>',
  }

  const pre3 = preflightCheck(pf3Input)
  console.log(`  preflight pass: ${pre3.pass}`)
  if (pre3.issues.length) {
    console.log(`  preflight issues:`)
    for (const issue of pre3.issues) {
      console.log(`    - ${issue}`)
    }
  }

  console.log('  Running postflight validator (Claude API)...')
  const post3 = await runPostflight(pf3Input)
  console.log('  postflight result:')
  console.log(JSON.stringify(post3, null, 4))
  console.log(`\n  TEST 3 VERDICT:`)
  console.log(`    postflight decision:  ${post3.decision}`)
  console.log(`    hardFails count:      ${post3.hardFails.length}`)
  if (post3.hardFails.length) {
    console.log(`    hardFails:`)
    for (const hf of post3.hardFails) {
      console.log(`      - ${hf}`)
    }
  }
  console.log(`    categoryAlignment:    ${post3.categoryAlignment}`)
  console.log(`    expected FAIL/ESCALATE: ${post3.decision === 'FAIL' || post3.decision === 'ESCALATE' ? 'PASS' : 'FAIL — got ' + post3.decision}`)
  console.log('')

  // ────────────────────────────────────────────────
  // Summary
  // ────────────────────────────────────────────────
  console.log('═══════════════════════════════════════════════════')
  console.log('  ALL TESTS COMPLETE')
  console.log('═══════════════════════════════════════════════════')
}

main().catch((err) => {
  console.error('Test runner failed:', err)
  process.exit(1)
})
