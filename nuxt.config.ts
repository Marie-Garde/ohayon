// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/variables.css'],
  app: {
    baseURL: '/ohayon/',
  },
  googleFonts: {
    families: {
      Manrope: [700, 800],
      'Roboto Slab': [300, 400],
    },
    display: 'swap',
  },
})
