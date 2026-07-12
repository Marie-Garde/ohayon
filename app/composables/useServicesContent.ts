// Récupère (une seule fois, mutualisé entre les composants de la page)
// le document « Nos services » géré dans Sanity.
export interface Prestation {
  _key: string
  titre?: string
  icone?: unknown
  texte?: unknown[]
  points?: string[]
}

export interface ServicesContent {
  heroTitre?: string
  heroLead?: string
  heroImage?: unknown
  prestations?: Prestation[]
  encartTitre?: string
  encartSousTitre?: string
  encartBouton?: string
  approcheSurtitre?: string
  approcheTitre?: string
  approcheTexte?: unknown[]
  approcheImage?: unknown
  processusSurtitre?: string
  processusTitre?: string
  etapes?: { _key: string; titre?: string; duree?: string; texte?: string }[]
  contactTexte?: string
  contactImage?: unknown
}

const SERVICES_QUERY = groq`*[_type == "servicesPage"][0]{
  heroTitre, heroLead, heroImage,
  prestations[]{ _key, titre, icone, texte, points },
  encartTitre, encartSousTitre, encartBouton,
  approcheSurtitre, approcheTitre, approcheTexte, approcheImage,
  processusSurtitre, processusTitre,
  etapes[]{ _key, titre, duree, texte },
  contactTexte, contactImage
}`

export function useServicesContent() {
  return useSanityQuery<ServicesContent | null>(SERVICES_QUERY)
}
