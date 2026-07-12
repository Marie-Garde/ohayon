// Récupère (une seule fois, mutualisé entre les composants de la page)
// le document « Qui sommes-nous » géré dans Sanity.
export interface Associe {
  _key: string
  prenom?: string
  nom?: string
  role?: string
  photo?: unknown
  email?: string
  parcours?: string[]
  aime?: string
  aimePas?: string
}

export interface QuiSommesNousContent {
  heroTitre?: string
  heroLead?: string
  heroImage?: unknown
  histoireTitre?: string
  jalons?: { _key: string; annee?: string; titre?: string; texte?: string }[]
  equipeTitre?: string
  equipeImage?: unknown
  equipeIntro?: unknown[]
  associes?: Associe[]
  locauxImage?: unknown
  locauxIntro?: string
  locauxPhotos?: unknown[]
  valeursTitre?: string
  valeursTexte1?: unknown[]
  valeursImage1?: unknown
  valeursTexte2?: unknown[]
  valeursImage2?: unknown
  contactTexte?: string
  contactImage?: unknown
}

const QSN_QUERY = groq`*[_type == "quiSommesNousPage"][0]{
  heroTitre, heroLead, heroImage,
  histoireTitre, jalons[]{ _key, annee, titre, texte },
  equipeTitre, equipeImage, equipeIntro,
  associes[]{ _key, prenom, nom, role, photo, email, parcours, aime, aimePas },
  locauxImage, locauxIntro, locauxPhotos,
  valeursTitre, valeursTexte1, valeursImage1, valeursTexte2, valeursImage2,
  contactTexte, contactImage
}`

export function useQuiSommesNousContent() {
  return useSanityQuery<QuiSommesNousContent | null>(QSN_QUERY)
}
