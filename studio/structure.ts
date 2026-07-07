import type { StructureResolver } from 'sanity/structure'
import { HomeIcon } from '@sanity/icons'

// Chaque page du site = un document unique (singleton).
// On ajoutera ici les autres pages au fur et à mesure.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Pages du site')
    .items([
      S.listItem()
        .title('Accueil')
        .icon(HomeIcon)
        .id('homePage')
        .child(
          S.document().schemaType('homePage').documentId('homePage').title('Accueil'),
        ),
    ])
