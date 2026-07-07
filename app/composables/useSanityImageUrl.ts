import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Construit une URL d'image Sanity. Renvoie `null` si aucune image
// n'est renseignée dans le CMS (les composants retombent alors sur
// l'image locale par défaut).
export function useSanityImageUrl() {
  const { client } = useSanity()
  const builder = imageUrlBuilder(client)
  return (source: SanityImageSource | undefined | null) =>
    source ? builder.image(source) : null
}
