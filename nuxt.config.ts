// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/sanity'],
  css: ['~/assets/css/variables.css'],
  // Déploiement GitHub Pages : gère .nojekyll (sinon le dossier _nuxt est
  // ignoré) et le fallback 404.html pour le routage SPA. La base d'URL
  // (« /ohayon/ ») est fournie via NUXT_APP_BASE_URL dans le workflow, pour
  // ne pas casser le dev en local qui reste servi sur « / ».
  nitro: {
    preset: 'github-pages',
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
