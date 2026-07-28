import { defineType, defineField, defineArrayMember } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons/Envelope'

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
 * Page « Contact ».
 * Chaque texte visible = un champ, chaque image = un champ image.
 * (Le formulaire lui-même est fonctionnel et n’est pas géré ici.)
 */
export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  icon: EnvelopeIcon,

  groups: [
    { name: 'hero', title: 'Bandeau', default: true },
    { name: 'coordonnees', title: 'Nous trouver' },
    { name: 'approche', title: 'Prenons contact' },
    { name: 'faq', title: 'Questions fréquentes' },
    { name: 'ecrire', title: 'Écrivez-nous' },
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
      description: 'Ex. « Contactez-nous »',
    }),
    defineField({
      name: 'heroLead',
      title: 'Texte d’accroche',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'Chaque retour à la ligne sera conservé.',
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
    /* NOUS TROUVER (coordonnées + carte)                                  */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'coordonneesTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'coordonnees',
      description: 'Ex. « Nous trouver »',
    }),
    defineField({
      name: 'adresse',
      title: 'Adresse',
      type: 'text',
      rows: 3,
      group: 'coordonnees',
      description: 'Chaque retour à la ligne sera conservé.',
    }),
    defineField({
      name: 'horaires',
      title: 'Horaires',
      type: 'text',
      rows: 2,
      group: 'coordonnees',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'coordonnees',
    }),
    defineField({
      name: 'emailNote',
      title: 'Note sous l’email',
      type: 'string',
      group: 'coordonnees',
      description: 'Ex. « Moyen de contact privilégié, réponse dans la journée. »',
    }),
    defineField({
      name: 'telephone',
      title: 'Téléphone',
      type: 'string',
      group: 'coordonnees',
    }),
    defineField({
      name: 'mapUrl',
      title: 'Lien carte (Google Maps)',
      type: 'url',
      group: 'coordonnees',
      description: 'URL d’intégration de la carte (format « …&output=embed »).',
    }),

    /* ------------------------------------------------------------------ */
    /* PRENONS CONTACT (bloc image + texte)                               */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'approcheSurtitre',
      title: 'Sur-titre',
      type: 'string',
      group: 'approche',
      description: 'Ex. « Prenons contact »',
    }),
    defineField({
      name: 'approcheTitre',
      title: 'Titre',
      type: 'string',
      group: 'approche',
      description: 'Ex. « Un premier échange, sans engagement »',
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
    /* QUESTIONS FRÉQUENTES                                                */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'faqSurtitre',
      title: 'Sur-titre',
      type: 'string',
      group: 'faq',
      description: 'Ex. « Une interrogation ? »',
    }),
    defineField({
      name: 'faqTitre',
      title: 'Titre',
      type: 'string',
      group: 'faq',
      description: 'Ex. « Questions fréquentes »',
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      group: 'faq',
      description: 'Les questions/réponses de la FAQ (4 à 6 recommandées).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'question',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'reponse', title: 'Réponse', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'question', subtitle: 'reponse' } },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* ÉCRIVEZ-NOUS (bandeau image)                                        */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'ecrireTitre',
      title: 'Titre (bandeau)',
      type: 'string',
      group: 'ecrire',
      description: 'Ex. « Écrivez-nous »',
    }),
    defineField({
      name: 'ecrireImage',
      title: 'Image (bandeau)',
      type: 'image',
      group: 'ecrire',
      options: { hotspot: true },
      fields: [altField()],
    }),
  ],

  preview: {
    select: { titre: 'heroTitre' },
    prepare: ({ titre }) => ({ title: titre || 'Contact' }),
  },
})
