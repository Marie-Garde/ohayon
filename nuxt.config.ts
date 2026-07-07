// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/sanity'],
  css: ['~/assets/css/variables.css'],
  sanity: {
    projectId: '0sf47gcp',
    dataset: 'production',
    apiVersion: '2026-05-15',
    useCdn: true,
  },
  googleFonts: {
    families: {
      Manrope: [700, 800],
      'Roboto Slab': [200, 300, 400],
    },
    display: 'swap',
  },
})
