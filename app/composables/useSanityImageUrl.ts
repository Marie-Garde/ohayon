import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Construit une URL d'image Sanity, optimisée pour le web quelle que soit
// la taille de l'original stocké dans le CMS :
//  - largeur plafonnée à 2000 px (les originaux peuvent faire plusieurs
//    milliers de px / dizaines de Mo) ;
//  - format automatique (WebP/AVIF selon le navigateur) ;
//  - qualité 75 (bon compromis poids / rendu).
// Renvoie `null` si aucune image n'est renseignée dans le CMS (les
// composants retombent alors sur l'image locale par défaut).
export function useSanityImageUrl() {
  const { client } = useSanity()
  const builder = createImageUrlBuilder(client)
  return (source: SanityImageSource | undefined | null) =>
    source
      ? builder.image(source).width(2000).fit('max').auto('format').quality(75)
      : null
}
