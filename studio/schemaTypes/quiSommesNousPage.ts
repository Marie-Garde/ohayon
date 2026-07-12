import { defineType, defineField, defineArrayMember } from 'sanity'
import { UsersIcon } from '@sanity/icons'

/** Champ « texte alternatif » réutilisable, ajouté à chaque image. */
const altField = () =>
  defineField({
    name: 'alt',
    title: 'Texte alternatif',
    type: 'string',
    description: 'Décrit l’image (accessibilité et référencement). Peut rester vide si l’image est purement décorative.',
  })

/** Champ « texte riche » limité au gras (mêmes règles que le hero de l’accueil). */
const richTextField = (opts: {
  name: string
  title: string
  group: string
  description?: string
}) =>
  defineField({
    name: opts.name,
    title: opts.title,
    type: 'array',
    group: opts.group,
    description:
      opts.description ??
      'Utilisez le bouton « Gras » pour mettre des mots en valeur. Appuyez sur Entrée pour passer à la ligne.',
    of: [
      defineArrayMember({
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [],
        marks: {
          decorators: [{ title: 'Gras', value: 'strong' }],
          annotations: [],
        },
      }),
    ],
  })

/**
 * Page « Qui sommes-nous ».
 * Chaque texte visible = un champ, chaque image = un champ image.
 * Les champs sont regroupés par section (onglets en haut du document).
 */
export const quiSommesNousPage = defineType({
  name: 'quiSommesNousPage',
  title: 'Qui sommes-nous',
  type: 'document',
  icon: UsersIcon,

  groups: [
    { name: 'hero', title: 'Bandeau', default: true },
    { name: 'histoire', title: 'Notre histoire' },
    { name: 'equipe', title: 'L’équipe' },
    { name: 'locaux', title: 'Nos locaux' },
    { name: 'valeurs', title: 'Nos valeurs' },
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
      description: 'Ex. « Qui sommes-nous »',
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
    /* NOTRE HISTOIRE (frise)                                              */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'histoireTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'histoire',
      description: 'Ex. « Notre histoire »',
    }),
    defineField({
      name: 'jalons',
      title: 'Étapes de la frise',
      type: 'array',
      group: 'histoire',
      description: 'Les dates clés du cabinet (dans l’ordre chronologique).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'jalon',
          fields: [
            defineField({ name: 'annee', title: 'Année', type: 'string', description: 'Ex. « 1987 »' }),
            defineField({ name: 'titre', title: 'Titre', type: 'string' }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 2 }),
          ],
          preview: {
            select: { title: 'titre', subtitle: 'annee' },
          },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* L’ÉQUIPE                                                            */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'equipeTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'equipe',
      description: 'Ex. « L’équipe »',
    }),
    defineField({
      name: 'equipeImage',
      title: 'Image (bandeau)',
      type: 'image',
      group: 'equipe',
      options: { hotspot: true },
      fields: [altField()],
    }),
    richTextField({
      name: 'equipeIntro',
      title: 'Texte d’introduction',
      group: 'equipe',
    }),
    defineField({
      name: 'associes',
      title: 'Associés',
      type: 'array',
      group: 'equipe',
      description: 'Les associés présentés sur des cartes cliquables.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'associe',
          fields: [
            defineField({ name: 'prenom', title: 'Prénom', type: 'string' }),
            defineField({ name: 'nom', title: 'Nom', type: 'string' }),
            defineField({ name: 'role', title: 'Fonction', type: 'string', description: 'Ex. « Associée, expert-comptable »' }),
            defineField({
              name: 'photo',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
              fields: [altField()],
            }),
            defineField({ name: 'email', title: 'Email', type: 'string' }),
            defineField({
              name: 'parcours',
              title: 'Parcours',
              type: 'array',
              of: [defineArrayMember({ type: 'string' })],
              description: 'Une ligne par élément (puces affichées dans le détail).',
            }),
            defineField({ name: 'aime', title: 'J’aime', type: 'text', rows: 2 }),
            defineField({ name: 'aimePas', title: 'J’aime pas', type: 'text', rows: 2 }),
          ],
          preview: {
            select: { prenom: 'prenom', nom: 'nom', subtitle: 'role', media: 'photo' },
            prepare: ({ prenom, nom, subtitle, media }) => ({
              title: [prenom, nom].filter(Boolean).join(' '),
              subtitle,
              media,
            }),
          },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* NOS LOCAUX (galerie)                                                */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'locauxImage',
      title: 'Image (bandeau)',
      type: 'image',
      group: 'locaux',
      options: { hotspot: true },
      fields: [altField()],
    }),
    defineField({
      name: 'locauxIntro',
      title: 'Texte d’introduction',
      type: 'text',
      rows: 3,
      group: 'locaux',
    }),
    defineField({
      name: 'locauxPhotos',
      title: 'Galerie de photos',
      type: 'array',
      group: 'locaux',
      description: 'Les photos des locaux (une quinzaine recommandée).',
      options: { layout: 'grid' },
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [altField()],
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* NOS VALEURS                                                         */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'valeursTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'valeurs',
      description: 'Ex. « Nos valeurs »',
    }),
    richTextField({
      name: 'valeursTexte1',
      title: 'Texte (1er bloc)',
      group: 'valeurs',
    }),
    defineField({
      name: 'valeursImage1',
      title: 'Image (1er bloc)',
      type: 'image',
      group: 'valeurs',
      options: { hotspot: true },
      fields: [altField()],
    }),
    richTextField({
      name: 'valeursTexte2',
      title: 'Texte (2e bloc)',
      group: 'valeurs',
    }),
    defineField({
      name: 'valeursImage2',
      title: 'Image (2e bloc)',
      type: 'image',
      group: 'valeurs',
      options: { hotspot: true },
      fields: [altField()],
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
    prepare: ({ titre }) => ({ title: titre || 'Qui sommes-nous' }),
  },
})
