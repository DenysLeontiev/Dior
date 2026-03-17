const DIOR_IMAGE_IDS = Array.from({ length: 32 }, (_, index) => index + 1)
  .filter((value) => value !== 23)
  .map((value) => String(value).padStart(3, '0'))

export function getDiorImage(seed = 1) {
  const numericSeed = Number(seed)
  const normalizedSeed = Number.isFinite(numericSeed) && numericSeed > 0 ? Math.floor(numericSeed) : 1
  const imageIndex = (normalizedSeed - 1) % DIOR_IMAGE_IDS.length

  const baseUrl = import.meta.env.BASE_URL || '/'

  return `${baseUrl}dior/${DIOR_IMAGE_IDS[imageIndex]}.jpg`
}