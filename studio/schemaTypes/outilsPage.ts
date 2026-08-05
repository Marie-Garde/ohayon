import { defineType, defineField, defineArrayMember } from 'sanity'
import { CogIcon } from '@sanity/icons'

/** Champ « texte alternatif » réutilisable, ajouté à chaque image. */
const altField = () =>
  defineField({
    name: 'alt',
    title: 'Texte alternatif',
    type: 'string',
    description: 'Décrit l’image (accessibilité et référencement). Peut rester vide si l’image est purement décorative.',
  })

/**
 * Page « Vos outils ».
 * Un bandeau + la liste des outils numériques mis à disposition des clients.
 */
export const outilsPage = defineType({
  name: 'outilsPage',
  title: 'Vos outils',
  type: 'document',
  icon: CogIcon,

  groups: [
    { name: 'hero', title: 'Bandeau', default: true },
    { name: 'outils', title: 'Outils' },
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
      description: 'Ex. « Vos outils »',
    }),
    defineField({
      name: 'heroLead',
      title: 'Texte d’accroche',
      type: 'text',
      rows: 3,
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
    /* OUTILS                                                              */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'outils',
      title: 'Outils',
      type: 'array',
      group: 'outils',
      description: 'Les plateformes accessibles (une carte par outil).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'outil',
          fields: [
            defineField({ name: 'nom', title: 'Nom', type: 'string', description: 'Ex. « Pennylane »' }),
            defineField({ name: 'description', title: 'Description', type: 'string', description: 'Ex. « Outil comptable et de gestion »' }),
            defineField({ name: 'lien', title: 'Lien (URL de connexion)', type: 'url' }),
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'image',
              description: 'Logo de l’outil (PNG ou SVG, fond transparent recommandé).',
              fields: [altField()],
            }),
          ],
          preview: { select: { title: 'nom', subtitle: 'description', media: 'logo' } },
        }),
      ],
    }),
  ],

  preview: {
    select: { titre: 'heroTitre' },
    prepare: ({ titre }) => ({ title: titre || 'Vos outils' }),
  },
})
