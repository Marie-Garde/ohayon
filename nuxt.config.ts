// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // SSR activé : `nuxt generate` pré-rend le HTML complet de chaque page
  // (contenu Sanity compris) au moment du build. Le HTML servi est donc
  // lisible tel quel par les moteurs de recherche, tout en restant un site
  // statique compatible GitHub Pages.
  ssr: true,
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/sanity'],
  css: ['~/assets/css/variables.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      // Base des URL canoniques / Open Graph. Surchargeable via
      // NUXT_PUBLIC_SITE_URL (ex. variable d'environnement Vercel).
      siteUrl: 'https://www.ohayon-associes.com',
      // Formulaire de contact via Web3Forms (fonctionne sur hébergement
      // statique, sans serveur). Ces clés d'accès sont PUBLIQUES par design
      // (elles ne font qu'identifier la boîte de réception, aucun secret).
      // À renseigner via NUXT_PUBLIC_WEB3FORMS_KEY (et _RH pour les
      // candidatures). Récupérables gratuitement sur https://web3forms.com.
      web3formsKey: '',
      web3formsKeyRh: '',
    },
  },
  // Déploiement Vercel : le préréglage Nitro est détecté automatiquement.
  nitro: {
    // Le sitemap n'est lié depuis aucune page : on force son prérendu.
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  sanity: {
    projectId: '0sf47gcp',
    dataset: 'production',
    apiVersion: '2026-05-15',
    // useCdn: false => le site lit toujours la version fraîche de l'API
    // Sanity (pas le cache CDN qui met ~1 min à se rafraîchir). Les
    // modifications publiées apparaissent dès le rechargement de la page.
    useCdn: false,
  },
  googleFonts: {
    families: {
      Manrope: [700, 800],
      'Roboto Slab': [200, 300, 400],
    },
    display: 'swap',
  },
})
