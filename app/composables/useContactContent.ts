// Récupère (une seule fois, mutualisé entre les composants de la page)
// le document « Contact » géré dans Sanity.
export interface ContactContent {
  heroTitre?: string
  heroLead?: string
  heroImage?: unknown
  coordonneesTitre?: string
  adresse?: string
  horaires?: string
  email?: string
  emailNote?: string
  telephone?: string
  mapUrl?: string
  approcheSurtitre?: string
  approcheTitre?: string
  approcheTexte?: unknown[]
  approcheImage?: unknown
  faqSurtitre?: string
  faqTitre?: string
  questions?: { _key: string; question?: string; reponse?: string }[]
  ecrireTitre?: string
  ecrireImage?: unknown
}

const CONTACT_QUERY = groq`*[_type == "contactPage"][0]{
  heroTitre, heroLead, heroImage,
  coordonneesTitre, adresse, horaires, email, emailNote, telephone, mapUrl,
  approcheSurtitre, approcheTitre, approcheTexte, approcheImage,
  faqSurtitre, faqTitre, questions[]{ _key, question, reponse },
  ecrireTitre, ecrireImage
}`

export function useContactContent() {
  return useSanityQuery<ContactContent | null>(CONTACT_QUERY)
}
