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
    },
  },
  runtimeConfig: {
    public: {
      // Base des URL canoniques / Open Graph. À surcharger via
      // NUXT_PUBLIC_SITE_URL le jour où le site aura un nom de domaine propre.
      siteUrl: 'https://marie-garde.github.io/ohayon',
    },
  },
  // Déploiement GitHub Pages : gère .nojekyll (sinon le dossier _nuxt est
  // ignoré) et le fallback 404.html pour le routage SPA. La base d'URL
  // (« /ohayon/ ») est fournie via NUXT_APP_BASE_URL dans le workflow, pour
  // ne pas casser le dev en local qui reste servi sur « / ».
  nitro: {
    preset: 'github-pages',
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
