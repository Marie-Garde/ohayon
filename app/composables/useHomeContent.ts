// Récupère (une seule fois, mutualisé entre tous les composants de la home)
// le document « Accueil » géré dans Sanity.
export interface HomeContent {
  heroTitre?: string
  heroTexte?: string
  heroBouton?: string
  heroImage?: unknown
  chiffres?: { _key: string; nombre?: string; libelle?: string }[]
  definitTitre?: string
  definitImage?: unknown
  valeurs?: { _key: string; titre?: string; texte?: string }[]
  valeursBouton?: string
  savoirFaireTitre?: string
  savoirFaireImage?: unknown
  services?: { _key: string; titre?: string; texte?: string; icone?: unknown }[]
  servicesBouton?: string
  processusSurtitre?: string
  processusTitre?: string
  etapes?: { _key: string; titre?: string; duree?: string; texte?: string }[]
  contactTexte?: string
  contactImage?: unknown
}

const HOME_QUERY = groq`*[_type == "homePage"][0]{
  heroTitre, heroTexte, heroBouton, heroImage,
  chiffres[]{ _key, nombre, libelle },
  definitTitre, definitImage,
  valeurs[]{ _key, titre, texte }, valeursBouton,
  savoirFaireTitre, savoirFaireImage,
  services[]{ _key, titre, texte, icone }, servicesBouton,
  processusSurtitre, processusTitre,
  etapes[]{ _key, titre, duree, texte },
  contactTexte, contactImage
}`

export function useHomeContent() {
  return useSanityQuery<HomeContent | null>(HOME_QUERY)
}
