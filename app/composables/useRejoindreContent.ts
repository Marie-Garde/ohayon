// Récupère (une seule fois, mutualisé entre les composants de la page)
// le document « Nous rejoindre » géré dans Sanity.
export interface RejoindreContent {
  heroTitre?: string
  heroLead?: string
  heroImage?: unknown
  raisonsTitre?: string
  raisons?: { _key: string; titre?: string; texte?: string }[]
  equipeTitre?: string
  equipeChiffres?: { _key: string; nombre?: string; libelle?: string }[]
  cultureTitre?: string
  cultureImage?: unknown
  motsCles?: string[]
  cultureCartes?: { _key: string; titre?: string; texte?: string; icone?: unknown }[]
  processusSurtitre?: string
  processusTitre?: string
  etapes?: { _key: string; titre?: string; texte?: string }[]
  offresTitre?: string
  offresImage?: unknown
  profilsImage?: unknown
  profilsTexte?: string
  offres?: {
    _key: string
    titre?: string
    typePoste?: string
    niveauEtude?: string
    debutSouhaite?: string
    texte?: string
    lien?: string
  }[]
  offresEncartTitre?: string
  offresEncartSousTitre?: string
  offresEncartBouton?: string
  offresEncartLien?: string
  contactTexte?: string
  contactImage?: unknown
}

const REJOINDRE_QUERY = groq`*[_type == "rejoindrePage"][0]{
  heroTitre, heroLead, heroImage,
  raisonsTitre, raisons[]{ _key, titre, texte },
  equipeTitre, equipeChiffres[]{ _key, nombre, libelle },
  cultureTitre, cultureImage, motsCles, cultureCartes[]{ _key, titre, texte, icone },
  processusSurtitre, processusTitre, etapes[]{ _key, titre, texte },
  offresTitre, offresImage, profilsImage, profilsTexte,
  offres[]{ _key, titre, typePoste, niveauEtude, debutSouhaite, texte, lien },
  offresEncartTitre, offresEncartSousTitre, offresEncartBouton, offresEncartLien,
  contactTexte, contactImage
}`

export function useRejoindreContent() {
  return useSanityQuery<RejoindreContent | null>(REJOINDRE_QUERY)
}
