// Génère /sitemap.xml au moment du build (route ajoutée à nitro.prerender).
// Les URL sont construites à partir de `siteUrl` (runtimeConfig public), donc
// elles suivront automatiquement un futur changement de nom de domaine.

// Chemins publics du site + priorité indicative pour les moteurs.
const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/qui-sommes-nous', priority: 0.8 },
  { path: '/nos-services', priority: 0.9 },
  { path: '/nous-rejoindre', priority: 0.7 },
  { path: '/vos-outils', priority: 0.6 },
  { path: '/contact', priority: 0.8 },
  { path: '/mentions-legales', priority: 0.2 },
  { path: '/plan-du-site', priority: 0.2 },
]

export default defineEventHandler((event) => {
  const siteUrl = (useRuntimeConfig(event).public.siteUrl as string).replace(/\/$/, '')
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = routes
    .map(
      ({ path, priority }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  setHeader(event, 'content-type', 'application/xml')
  return xml
})
