import { defineType, defineField, defineArrayMember } from 'sanity'
import { HomeIcon } from '@sanity/icons'

/**
 * Page d'accueil.
 * Chaque texte visible sur la page = un champ, chaque image = un champ image.
 * Les champs sont regroupés par section (onglets en haut du document).
 */
export const homePage = defineType({
  name: 'homePage',
  title: 'Accueil',
  type: 'document',
  icon: HomeIcon,

  groups: [
    { name: 'hero', title: 'Bandeau d’accueil', default: true },
    { name: 'chiffres', title: 'Chiffres clés' },
    { name: 'definit', title: 'Ce qui nous définit' },
    { name: 'valeurs', title: 'Nos valeurs' },
    { name: 'savoirFaire', title: 'Nos savoir-faire' },
    { name: 'services', title: 'Services' },
    { name: 'processus', title: 'Comment ça se passe' },
    { name: 'contact', title: 'Appel à contact' },
  ],

  fields: [
    /* ------------------------------------------------------------------ */
    /* BANDEAU D’ACCUEIL (hero)                                            */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'heroTitre',
      title: 'Titre principal',
      type: 'string',
      group: 'hero',
      description: 'Le grand titre en haut de la page. Ex. « La qualité, par principe. »',
    }),
    defineField({
      name: 'heroTexte',
      title: 'Texte sous le titre',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'Chaque retour à la ligne sera conservé.',
    }),
    defineField({
      name: 'heroBouton',
      title: 'Texte du bouton',
      type: 'string',
      group: 'hero',
      description: 'Ex. « Contactez-nous ! »',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image de fond',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),

    /* ------------------------------------------------------------------ */
    /* CHIFFRES CLÉS                                                       */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'chiffres',
      title: 'Chiffres',
      type: 'array',
      group: 'chiffres',
      description: 'Les chiffres affichés dans le bandeau blanc (4 recommandés).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'chiffre',
          fields: [
            defineField({ name: 'nombre', title: 'Nombre', type: 'string', description: 'Ex. « 40 », « ⅓ »' }),
            defineField({ name: 'libelle', title: 'Libellé', type: 'string', description: 'Ex. « Années d’expériences »' }),
          ],
          preview: {
            select: { title: 'nombre', subtitle: 'libelle' },
          },
        }),
      ],
    }),

    /* ------------------------------------------------------------------ */
    /* CE QUI NOUS DÉFINIT                                                 */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'definitTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'definit',
      description: 'Ex. « Ce qui nous définit »',
    }),
    defineField({
      name: 'definitImage',
      title: 'Image',
      type: 'image',
      group: 'definit',
      options: { hotspot: true },
    }),

    /* ------------------------------------------------------------------ */
    /* NOS VALEURS                                                         */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'valeurs',
      title: 'Cartes de valeurs',
      type: 'array',
      group: 'valeurs',
      description: 'Les cartes encadrées (4 recommandées).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'valeur',
          fields: [
            defineField({ name: 'titre', title: 'Titre de la carte', type: 'string' }),
            defineField({ name: 'texte', title: 'Texte de la carte', type: 'text', rows: 3 }),
          ],
          preview: {
            select: { title: 'titre', subtitle: 'texte' },
          },
        }),
      ],
    }),
    defineField({
      name: 'valeursBouton',
      title: 'Texte du bouton',
      type: 'string',
      group: 'valeurs',
      description: 'Ex. « Découvrir qui nous sommes et nos valeurs »',
    }),

    /* ------------------------------------------------------------------ */
    /* NOS SAVOIR-FAIRE                                                    */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'savoirFaireTitre',
      title: 'Titre de la section',
      type: 'string',
      group: 'savoirFaire',
      description: 'Ex. « Nos savoir-faire »',
    }),
    defineField({
      name: 'savoirFaireImage',
      title: 'Image',
      type: 'image',
      group: 'savoirFaire',
      options: { hotspot: true },
    }),

    /* ------------------------------------------------------------------ */
    /* SERVICES                                                            */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'services',
      title: 'Cartes de services',
      type: 'array',
      group: 'services',
      description: 'Les services avec icône (5 recommandés).',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({ name: 'titre', title: 'Titre', type: 'string' }),
            defineField({ name: 'texte', title: 'Texte', type: 'text', rows: 2 }),
            defineField({
              name: 'icone',
              title: 'Icône',
              type: 'image',
              description: 'Petite icône (format SVG ou PNG).',
            }),
          ],
          preview: {
            select: { title: 'titre', subtitle: 'texte', media: 'icone' },
          },
        }),
      ],
    }),
    defineField({
      name: 'servicesBouton',
      title: 'Texte du bouton',
      type: 'string',
      group: 'services',
      description: 'Ex. « Découvrir nos services en détail »',
    }),

    /* ------------------------------------------------------------------ */
    /* COMMENT ÇA SE PASSE (processus)                                     */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'processusSurtitre',
      title: 'Sur-titre',
      type: 'string',
      group: 'processus',
      description: 'Petit texte au-dessus du titre. Ex. « Premier contact ? »',
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
    /* APPEL À CONTACT (cta final)                                         */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'contactTexte',
      title: 'Texte du bouton',
      type: 'string',
      group: 'contact',
      description: 'Ex. « Pour toute question n’hésitez pas contactez-nous ! »',
    }),
    defineField({
      name: 'contactImage',
      title: 'Image de fond',
      type: 'image',
      group: 'contact',
      options: { hotspot: true },
    }),
  ],

  preview: {
    prepare: () => ({ title: 'Accueil' }),
  },
})
