// Données structurées Schema.org (JSON-LD) décrivant le cabinet en tant que
// commerce local / service comptable. Aide Google à afficher les rich results
// et à alimenter le pack local (fiche à droite des résultats). À appeler une
// seule fois, sur une page représentative (accueil).
//
// Les informations proviennent des mentions légales du site.

export function useLocalBusinessJsonLd() {
  const siteUrl = (useRuntimeConfig().public.siteUrl as string).replace(/\/$/, '')

  const data = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Cabinet Ohayon & Associés',
    description:
      "Cabinet d'expertise comptable à Toulouse : comptabilité, fiscalité, gestion sociale et paie, audit et accompagnement des entreprises.",
    image: `${siteUrl}/og-default.jpg`,
    url: `${siteUrl}/`,
    telephone: '+33561552544',
    address: {
      '@type': 'PostalAddress',
      streetAddress: "36, route d'Espagne",
      postalCode: '31100',
      addressLocality: 'Toulouse',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Toulouse',
    },
    priceRange: '€€',
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data),
      },
    ],
  })
}
