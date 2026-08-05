import { defineType, defineField, defineArrayMember } from 'sanity'
import { RocketIcon } from '@sanity/icons'

/** Champ « texte alternatif » réutilisable, ajouté à chaque image. */
const altField = () =>
  defineField({
    name: 'alt',
    title: 'Texte alternatif',
    type: 'string',
    description: 'Décrit l’image (accessibilité et référencement). Peut rester vide si l’image est purement décorative.',
  })

/**
 * Page « Nous rejoindre ».
 * Chaque texte visible = un champ, chaque image = un champ image.
 * Les champs sont regroupés par section (onglets en haut du document).
 */
export const rejoindrePage = defineType({
  name: 'rejoindrePage',
  title: 'Nous rejoindre',
  type: 'document',
  icon: RocketIcon,

  groups: [
    { name: 'hero', title: 'Bandeau', default: true },
    { name: 'raisons', title: 'Pourquoi nous rejoindre' },
    { name: 'culture', title: 'Culture & ambiance' },
    { name: 'processus', title: 'Processus de recrutement' },
    { name: 'offres', title: 'Offres d’emploi' },
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
      description: 'Ex. « Nous rejoindre »',
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
    /* POURQUOI NOUS REJOINDRE (raisons)                                   */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'raisonsTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'raisons',
      description: 'Ex. « Pourquoi nous rejoindre ? »',
    }),
    defineField({
      name: 'raisons',
      title: 'Cartes « raisons »',
      type: 'array',
      group: 'raisons',
      description: 'Les cartes de texte (2 recommandées ; la carte chiffres est gérée à part).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'raison',
          fields: [
            defineField({ name: 'titre', title: 'Titre', type: 'string' }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'titre', subtitle: 'texte' } },
        }),
      ],
    }),
    defineField({
      name: 'equipeTitre',
      title: 'Carte chiffres — titre',
      type: 'string',
      group: 'raisons',
      description: 'Ex. « Une équipe expérimentée »',
    }),
    defineField({
      name: 'equipeChiffres',
      title: 'Carte chiffres — chiffres',
      type: 'array',
      group: 'raisons',
      description: 'Les chiffres de la carte « équipe » (2 recommandés).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'chiffre',
          fields: [
            defineField({ name: 'nombre', title: 'Nombre', type: 'string', description: 'Ex. « 40 »' }),
            defineField({ name: 'libelle', title: 'Libellé', type: 'string', description: 'Ex. « ans d’expérience »' }),
          ],
          preview: { select: { title: 'nombre', subtitle: 'libelle' } },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* CULTURE & AMBIANCE                                                  */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'cultureTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'culture',
      description: 'Ex. « Culture & ambiance du cabinet »',
    }),
    defineField({
      name: 'cultureImage',
      title: 'Image (bandeau)',
      type: 'image',
      group: 'culture',
      options: { hotspot: true },
      fields: [altField()],
    }),
    defineField({
      name: 'motsCles',
      title: 'Mots-clés',
      type: 'array',
      group: 'culture',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Les mots qui vous représentent (affichés en ligne, séparés par des points).',
    }),
    defineField({
      name: 'cultureCartes',
      title: 'Cartes de culture',
      type: 'array',
      group: 'culture',
      description: 'Les 4 cartes (icône + titre + texte).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'carte',
          fields: [
            defineField({ name: 'titre', title: 'Titre', type: 'string' }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 3 }),
            defineField({
              name: 'icone',
              title: 'Icône',
              type: 'image',
              description: 'Petite icône (SVG ou PNG).',
            }),
          ],
          preview: { select: { title: 'titre', subtitle: 'texte', media: 'icone' } },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* PROCESSUS DE RECRUTEMENT                                            */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'processusSurtitre',
      title: 'Sur-titre',
      type: 'string',
      group: 'processus',
      description: 'Ex. « Envie de nous rejoindre ? »',
    }),
    defineField({
      name: 'processusTitre',
      title: 'Titre',
      type: 'string',
      group: 'processus',
      description: 'Ex. « Processus de recrutement »',
    }),
    defineField({
      name: 'etapes',
      title: 'Étapes',
      type: 'array',
      group: 'processus',
      description: 'Les étapes de la frise (5 recommandées).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'etape',
          fields: [
            defineField({ name: 'titre', title: 'Titre de l’étape', type: 'string' }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'titre', subtitle: 'texte' } },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* OFFRES D’EMPLOI                                                     */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'offresTitre',
      title: 'Titre (bandeau)',
      type: 'string',
      group: 'offres',
      description: 'Ex. « Offres d’emploi »',
    }),
    defineField({
      name: 'offresImage',
      title: 'Image (bandeau)',
      type: 'image',
      group: 'offres',
      options: { hotspot: true },
      fields: [altField()],
    }),
    defineField({
      name: 'profilsImage',
      title: 'Image « profils recherchés »',
      type: 'image',
      group: 'offres',
      options: { hotspot: true },
      fields: [altField()],
    }),
    defineField({
      name: 'profilsTexte',
      title: 'Texte « profils recherchés »',
      type: 'text',
      rows: 3,
      group: 'offres',
    }),
    defineField({
      name: 'offres',
      title: 'Liste des offres d’emploi',
      type: 'array',
      group: 'offres',
      description:
        'Chaque offre : un titre, un texte descriptif et un lien. Le bouton affichera toujours « Voir l’offre ».',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'offre',
          fields: [
            defineField({ name: 'titre', title: 'Titre de l’offre', type: 'string' }),
            defineField({
              name: 'typePoste',
              title: 'Type de poste',
              type: 'string',
              description: 'Facultatif.',
              options: {
                list: [
                  { title: 'CDI', value: 'CDI' },
                  { title: 'CDD', value: 'CDD' },
                  { title: 'Stage', value: 'Stage' },
                  { title: 'Alternance', value: 'Alternance' },
                  { title: 'Freelance', value: 'Freelance' },
                ],
                layout: 'radio',
              },
            }),
            defineField({
              name: 'niveauEtude',
              title: 'Niveau d’étude',
              type: 'string',
              description: 'Facultatif. Ex. « Bac+5 ».',
            }),
            defineField({
              name: 'debutSouhaite',
              title: 'Début souhaité',
              type: 'date',
              description: 'Facultatif. Laissé vide, le site affichera « Maintenant ».',
              options: { dateFormat: 'DD/MM/YYYY' },
            }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 3 }),
            defineField({
              name: 'lien',
              title: 'Lien de l’offre',
              type: 'url',
              description: 'Le bouton « Voir l’offre » pointera vers ce lien.',
            }),
          ],
          preview: { select: { title: 'titre', subtitle: 'typePoste' } },
        }),
      ],
    }),
    defineField({
      name: 'offresEncartTitre',
      title: 'Encart — titre',
      type: 'string',
      group: 'offres',
      description: 'Ex. « Envie de nous rejoindre ? »',
    }),
    defineField({
      name: 'offresEncartSousTitre',
      title: 'Encart — sous-titre',
      type: 'string',
      group: 'offres',
    }),
    defineField({
      name: 'offresEncartBouton',
      title: 'Encart — texte du bouton',
      type: 'string',
      group: 'offres',
      description: 'Ex. « Voir nos offres »',
    }),
    defineField({
      name: 'offresEncartLien',
      title: 'Encart — lien du bouton',
      type: 'url',
      group: 'offres',
      description: 'Ex. la page LinkedIn des offres.',
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
    prepare: ({ titre }) => ({ title: titre || 'Nous rejoindre' }),
  },
})
