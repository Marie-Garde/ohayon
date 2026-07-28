import type { StructureResolver } from 'sanity/structure'
import { HomeIcon } from '@sanity/icons/Home'
import { UsersIcon } from '@sanity/icons/Users'
import { CaseIcon } from '@sanity/icons/Case'
import { RocketIcon } from '@sanity/icons/Rocket'
import { EnvelopeIcon } from '@sanity/icons/Envelope'
import { CogIcon } from '@sanity/icons/Cog'
import { DocumentIcon } from '@sanity/icons/Document'

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
      S.listItem()
        .title('Qui sommes-nous')
        .icon(UsersIcon)
        .id('quiSommesNousPage')
        .child(
          S.document()
            .schemaType('quiSommesNousPage')
            .documentId('quiSommesNousPage')
            .title('Qui sommes-nous'),
        ),
      S.listItem()
        .title('Nos services')
        .icon(CaseIcon)
        .id('servicesPage')
        .child(
          S.document()
            .schemaType('servicesPage')
            .documentId('servicesPage')
            .title('Nos services'),
        ),
      S.listItem()
        .title('Nous rejoindre')
        .icon(RocketIcon)
        .id('rejoindrePage')
        .child(
          S.document()
            .schemaType('rejoindrePage')
            .documentId('rejoindrePage')
            .title('Nous rejoindre'),
        ),
      S.listItem()
        .title('Contact')
        .icon(EnvelopeIcon)
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
            .title('Contact'),
        ),
      S.listItem()
        .title('Vos outils')
        .icon(CogIcon)
        .id('outilsPage')
        .child(
          S.document()
            .schemaType('outilsPage')
            .documentId('outilsPage')
            .title('Vos outils'),
        ),
      S.listItem()
        .title('Mentions légales')
        .icon(DocumentIcon)
        .id('mentionsLegalesPage')
        .child(
          S.document()
            .schemaType('mentionsLegalesPage')
            .documentId('mentionsLegalesPage')
            .title('Mentions légales'),
        ),
    ])
