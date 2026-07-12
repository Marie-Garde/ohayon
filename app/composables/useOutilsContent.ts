// Récupère (une seule fois, mutualisé entre les composants de la page)
// le document « Vos outils » géré dans Sanity.
export interface OutilsContent {
  heroTitre?: string
  heroLead?: string
  heroImage?: unknown
  outils?: { _key: string; nom?: string; description?: string; lien?: string; logo?: unknown }[]
}

const OUTILS_QUERY = groq`*[_type == "outilsPage"][0]{
  heroTitre, heroLead, heroImage,
  outils[]{ _key, nom, description, lien, logo }
}`

export function useOutilsContent() {
  return useSanityQuery<OutilsContent | null>(OUTILS_QUERY)
}
