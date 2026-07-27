// Centralise les métadonnées SEO d'une page : balise <title>, description,
// URL canonique, Open Graph (partages LinkedIn/Facebook/WhatsApp) et Twitter
// Card. Chaque page appelle `useSeo({ title, description })` dans son
// <script setup> ; l'image et le nom du site ont des valeurs par défaut.
//
// L'URL canonique et og:url sont construites à partir de `siteUrl`
// (runtimeConfig public, surchargeable via NUXT_PUBLIC_SITE_URL le jour où le
// site aura un nom de domaine propre) et du chemin de la route courante.

interface SeoInput {
  title: string
  description: string
  /** Chemin (depuis /public) d'une image de partage spécifique à la page. */
  image?: string
}

export function useSeo(input: SeoInput) {
  const route = useRoute()
  const siteUrl = (useRuntimeConfig().public.siteUrl as string).replace(/\/$/, '')
  const url = siteUrl + route.path
  const image = siteUrl + (input.image || '/og-default.jpg')

  useSeoMeta({
    title: input.title,
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: 'website',
    ogUrl: url,
    ogImage: image,
    ogImageAlt: input.title,
    ogSiteName: 'Cabinet Ohayon & Associés',
    ogLocale: 'fr_FR',
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: image,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
