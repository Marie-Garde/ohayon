import { defineType, defineField, defineArrayMember } from 'sanity'
import { CaseIcon } from '@sanity/icons/Case'

/** Champ « texte alternatif » réutilisable, ajouté à chaque image. */
const altField = () =>
  defineField({
    name: 'alt',
    title: 'Texte alternatif',
    type: 'string',
    description: 'Décrit l’image (accessibilité et référencement). Peut rester vide si l’image est purement décorative.',
  })

/** Blocs de « texte riche » limités au gras (paragraphes + gras). */
const richBlocks = () => [
  defineArrayMember({
    type: 'block',
    styles: [{ title: 'Normal', value: 'normal' }],
    lists: [],
    marks: {
      decorators: [{ title: 'Gras', value: 'strong' }],
      annotations: [],
    },
  }),
]

/**
 * Page « Nos services ».
 * Chaque texte visible = un champ, chaque image = un champ image.
 * Les champs sont regroupés par section (onglets en haut du document).
 */
export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Nos services',
  type: 'document',
  icon: CaseIcon,

  groups: [
    { name: 'hero', title: 'Bandeau', default: true },
    { name: 'prestations', title: 'Nos prestations' },
    { name: 'approche', title: 'Notre approche' },
    { name: 'processus', title: 'Comment ça se passe' },
    { name: 'contact', title: 'Encart contact' },
  ],

  fields: [
    /* ------------------------------------------------------------------ */
    /* BANDEAU (hero)                                                      */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'heroTitre',
      title: 'Titre',
      type: 'string',
      group: 'hero',
      description: 'Ex. « Nos services »',
    }),
    defineField({
      name: 'heroLead',
      title: 'Texte d’accroche',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image de fond',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [altField()],
    }),

    /* ------------------------------------------------------------------ */
    /* NOS PRESTATIONS (cartes détaillées)                                 */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'prestations',
      title: 'Prestations',
      type: 'array',
      group: 'prestations',
      description: 'Les services détaillés (5 recommandés).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'prestation',
          fields: [
            defineField({ name: 'titre', title: 'Titre', type: 'string' }),
            defineField({
              name: 'icone',
              title: 'Icône',
              type: 'image',
              description: 'Petite icône (SVG ou PNG).',
            }),
            defineField({
              name: 'texte',
              title: 'Description',
              type: 'array',
              of: richBlocks(),
              description: 'Un ou plusieurs paragraphes. « Gras » disponible.',
            }),
            defineField({
              name: 'points',
              title: 'Liste (points clés)',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              description: 'Une ligne par élément (puces à droite de la carte).',
            }),
          ],
          preview: {
            select: { title: 'titre', media: 'icone' },
          },
        }),
      ],
    }),
    defineField({
      name: 'encartTitre',
      title: 'Encart contact — titre',
      type: 'string',
      group: 'prestations',
      description: 'Ex. « Besoin d’un accompagnement personnalisé ? »',
    }),
    defineField({
      name: 'encartSousTitre',
      title: 'Encart contact — sous-titre',
      type: 'string',
      group: 'prestations',
      description: 'Ex. « Prenez rendez-vous avec nos experts. »',
    }),
    defineField({
      name: 'encartBouton',
      title: 'Encart contact — bouton',
      type: 'string',
      group: 'prestations',
      description: 'Ex. « Contactez-nous »',
    }),

    /* ------------------------------------------------------------------ */
    /* NOTRE APPROCHE (bloc image + texte)                                 */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'approcheSurtitre',
      title: 'Sur-titre',
      type: 'string',
      group: 'approche',
      description: 'Ex. « Notre approche »',
    }),
    defineField({
      name: 'approcheTitre',
      title: 'Titre',
      type: 'string',
      group: 'approche',
      description: 'Ex. « Un accompagnement à taille humaine »',
    }),
    defineField({
      name: 'approcheTexte',
      title: 'Texte',
      type: 'array',
      of: richBlocks(),
      group: 'approche',
      description: 'Un ou plusieurs paragraphes. « Gras » disponible.',
    }),
    defineField({
      name: 'approcheImage',
      title: 'Image',
      type: 'image',
      group: 'approche',
      options: { hotspot: true },
      fields: [altField()],
    }),

    /* ------------------------------------------------------------------ */
    /* COMMENT ÇA SE PASSE (frise)                                         */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'processusSurtitre',
      title: 'Sur-titre',
      type: 'string',
      group: 'processus',
      description: 'Ex. « Premier contact ? »',
    }),
    defineField({
      name: 'processusTitre',
      title: 'Titre',
      type: 'string',
      group: 'processus',
      description: 'Ex. « Comment ça se passe »',
    }),
    defineField({
      name: 'etapes',
      title: 'Étapes de la frise',
      type: 'array',
      group: 'processus',
      description: 'Les étapes de la timeline (5 recommandées).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'etape',
          fields: [
            defineField({ name: 'titre', title: 'Titre de l’étape', type: 'string' }),
            defineField({ name: 'duree', title: 'Durée', type: 'string', description: 'Ex. « 15 à 30 min »' }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'titre', subtitle: 'duree' },
          },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* ENCART CONTACT (bas de page)                                        */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'contactTexte',
      title: 'Texte du bouton',
      type: 'string',
      group: 'contact',
      description: 'Laissé vide, le site reprend le texte de la page d’accueil.',
    }),
    defineField({
      name: 'contactImage',
      title: 'Image de fond',
      type: 'image',
      group: 'contact',
      options: { hotspot: true },
      fields: [altField()],
      description: 'Laissée vide, le site reprend l’image de la page d’accueil.',
    }),
  ],

  preview: {
    select: { titre: 'heroTitre' },
    prepare: ({ titre }) => ({ title: titre || 'Nos services' }),
  },
})
