import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import https from 'https'

dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const ACCESS_KEY = (process.env.UNSPLASH_ACCESS_KEY || '').replace(/^"|"$/g, '').trim()
if (!ACCESS_KEY) {
  console.error('UNSPLASH_ACCESS_KEY not set')
  process.exit(1)
}
console.log(`Using key: ${ACCESS_KEY.slice(0, 8)}...`)

interface UnsplashPhoto {
  id: string
  urls: { raw: string }
  description: string | null
  alt_description: string | null
}

function fetchUnsplash(query: string, perPage = 15): Promise<UnsplashPhoto[]> {
  return new Promise((resolve, reject) => {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`
    const options = {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    }
    https.get(url, options, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        try {
          const json = JSON.parse(data)
          if (json.errors) {
            reject(new Error(json.errors.join(', ')))
            return
          }
          resolve(json.results || [])
        } catch (e) {
          reject(e)
        }
      })
    }).on('error', reject)
  })
}

const QUERIES: Record<string, string> = {
  martial_arts: 'karate kids dojo children training',
  pizza: 'pizza restaurant italian',
  burger: 'burger smash burger restaurant',
  taco_mexican: 'tacos mexican food',
  dental: 'dentist dental office',
  gym_fitness: 'gym fitness workout',
  yoga_pilates: 'yoga studio pilates',
  salon_barber: 'hair salon barber',
  coffee_cafe: 'coffee shop cafe',
  landscaping: 'landscaping lawn care',
  roofing: 'roofing contractor',
  auto_repair: 'auto repair mechanic',
  cleaning: 'house cleaning service',
  law: 'law office attorney',
  real_estate: 'real estate agent',
}

async function main() {
  const pools: Record<string, Array<{ id: string; url: string; tags: string[] }>> = {}

  for (const [subtype, query] of Object.entries(QUERIES)) {
    console.log(`Fetching: ${subtype} ("${query}")...`)
    try {
      const photos = await fetchUnsplash(query)
      const queryTags = query.toLowerCase().split(/\s+/).filter((t) => t.length > 2)
      pools[subtype] = photos.map((p) => ({
        id: p.id,
        url: p.urls.raw.split('?')[0] + '?w=1600&auto=format&fit=crop',
        tags: [
          ...queryTags.slice(0, 3),
          ...((p.alt_description || '') + ' ' + (p.description || ''))
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .split(/[\s,]+/)
            .filter((t) => t.length > 2 && !queryTags.includes(t))
            .slice(0, 2),
        ].slice(0, 5),
      }))
      console.log(`  ✓ ${pools[subtype].length} photos`)
    } catch (err) {
      console.error(`  ✗ ${subtype}: ${(err as Error).message}`)
      pools[subtype] = []
    }
    // Rate limit: 50 req/hr for demo apps
    await new Promise((r) => setTimeout(r, 200))
  }

  // Generate the photo-library.ts file
  let output = `export interface PhotoSet {
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
    url: \`https://images.unsplash.com/photo-\${id}?w=1600&auto=format&fit=crop\`,
    subtype,
    tags,
    heroReady,
    approved: true,
  }
}

function verifiedAsset(id: string, url: string, subtype: string, tags: string[], heroReady = true): PhotoAsset {
  return { id, url, subtype, tags, heroReady, approved: true }
}

// ── Curated pools — verified via Unsplash API ${new Date().toISOString().slice(0, 10)} ──

const PHOTO_POOLS: Record<string, PhotoAsset[]> = {\n`

  for (const [subtype, photos] of Object.entries(pools)) {
    output += `  ${subtype}: [\n`
    photos.forEach((p, i) => {
      const tagsStr = p.tags.map((t) => `'${t}'`).join(', ')
      const heroReady = i < 10
      output += `    verifiedAsset('${p.id}', '${p.url}', '${subtype}', [${tagsStr}]${heroReady ? '' : ', false'}),\n`
    })
    output += `  ],\n`
  }

  // Add pools we didn't fetch but need to keep
  const keepPools = [
    'food_takeout', 'bbq', 'japanese_food', 'sandwich_deli', 'bakery',
    'bar_brewery', 'dance_studio', 'spa_wellness', 'plumbing', 'hvac',
    'childcare', 'pet_services', 'medical_clinic', 'tutoring',
    'chiropractic', 'photography', 'retail', 'default',
  ]
  for (const subtype of keepPools) {
    output += `  // ${subtype}: preserved from existing pool\n`
  }

  output += `}

`

  // Now read existing photo-library.ts to preserve pools we didn't fetch
  const existingFile = fs.readFileSync(path.join(__dirname, '..', 'lib', 'photo-library.ts'), 'utf-8')

  // Extract existing pools for subtypes we didn't fetch
  for (const subtype of keepPools) {
    const regex = new RegExp(`  ${subtype}: \\[\\n([\\s\\S]*?)  \\],`, 'm')
    const match = existingFile.match(regex)
    if (match) {
      // Replace the placeholder comment with actual pool data
      output = output.replace(
        `  // ${subtype}: preserved from existing pool\n`,
        `  ${subtype}: [\n${match[1]}  ],\n`,
      )
    } else {
      // Remove placeholder if pool doesn't exist
      output = output.replace(`  // ${subtype}: preserved from existing pool\n`, '')
    }
  }

  // Close PHOTO_POOLS and add remaining functions
  // Extract everything after PHOTO_POOLS closing brace from existing file
  const functionsMatch = existingFile.match(/\/\/ ── Parent category[\s\S]*$/)
  if (functionsMatch) {
    output += functionsMatch[0]
  } else {
    // Fallback: add minimal functions
    output += `const PARENT_TO_SUBTYPE: Record<string, string> = {}

export function getImagePool(subtype: string): PhotoAsset[] {
  if (PHOTO_POOLS[subtype]) return PHOTO_POOLS[subtype]
  const parent = PARENT_TO_SUBTYPE[subtype]
  if (parent && PHOTO_POOLS[parent]) return PHOTO_POOLS[parent]
  return PHOTO_POOLS['default'] || []
}

export function selectHeroImage(
  subtype: string,
  seed?: string,
  audienceHints?: string[],
): PhotoAsset & { escalate: boolean } {
  let pool = getImagePool(subtype).filter((p) => p.heroReady && p.approved)
  if (pool.length === 0) {
    const fallback = (PHOTO_POOLS['default'] || [])[0]
    if (!fallback) return { id: '', url: '', subtype: 'default', tags: [], heroReady: false, approved: false, escalate: true }
    return { ...fallback, escalate: true }
  }
  const wantsKids = (audienceHints || []).some((h) => /\\b(kids?|children|youth|ages?\\s*\\d)/i.test(h))
  if (wantsKids) {
    const kidPool = pool.filter((p) => p.tags.some((t) => /kids|children|youth/i.test(t)))
    if (kidPool.length > 0) pool = kidPool
  }
  let hash = 0
  const s = seed || 'default'
  for (let i = 0; i < s.length; i++) hash = ((hash << 5) - hash + s.charCodeAt(i)) | 0
  const index = Math.abs(hash) % pool.length
  return { ...pool[index], escalate: false }
}

export function selectServiceImages(subtype: string, count: number, seed?: string): PhotoAsset[] {
  const pool = getImagePool(subtype).filter((p) => p.approved)
  if (pool.length === 0) return []
  let hash = 0
  const s = (seed || 'svc') + '-service'
  for (let i = 0; i < s.length; i++) hash = ((hash << 5) - hash + s.charCodeAt(i)) | 0
  const results: PhotoAsset[] = []
  for (let i = 0; i < count; i++) {
    const idx = Math.abs(hash + i * 7) % pool.length
    results.push(pool[idx])
  }
  return results
}

export function hasCategory(category: string): boolean {
  return category in PHOTO_POOLS
}
`
  }

  const outPath = path.join(__dirname, '..', 'lib', 'photo-library.ts')
  fs.writeFileSync(outPath, output, 'utf-8')
  console.log(`\nWrote ${outPath} (${(output.length / 1024).toFixed(1)} KB)`)

  // Summary
  console.log('\n=== POOL SUMMARY ===')
  let total = 0
  for (const [subtype, photos] of Object.entries(pools)) {
    console.log(`  ${subtype}: ${photos.length} verified photos`)
    total += photos.length
  }
  console.log(`  TOTAL: ${total} verified Unsplash photos across ${Object.keys(pools).length} subtypes`)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
