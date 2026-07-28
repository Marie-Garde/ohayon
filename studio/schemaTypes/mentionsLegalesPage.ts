import { defineType, defineField, defineArrayMember } from 'sanity'
import { DocumentIcon } from '@sanity/icons/Document'

/**
 * Page « Mentions légales ».
 * Un bandeau (titre + date de mise à jour) puis une liste de sections.
 * Chaque section peut contenir :
 *   - un ou plusieurs paragraphes (« texte ») ;
 *   - et/ou une liste d’informations « libellé / valeur » (« infos »),
 *     utilisée pour l’éditeur et l’hébergeur.
 * Le contenu est pré-rempli avec les informations réelles du Cabinet.
 */
export const mentionsLegalesPage = defineType({
  name: 'mentionsLegalesPage',
  title: 'Mentions légales',
  type: 'document',
  icon: DocumentIcon,

  groups: [
    { name: 'hero', title: 'Bandeau', default: true },
    { name: 'contenu', title: 'Contenu' },
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
      initialValue: 'Mentions légales',
    }),
    defineField({
      name: 'derniereMaj',
      title: 'Dernière mise à jour',
      type: 'string',
      group: 'hero',
      description: 'S’affiche sous le titre. Ex. « avril 2026 ».',
      initialValue: 'avril 2026',
    }),

    /* ------------------------------------------------------------------ */
    /* CONTENU (sections)                                                  */
    /* ------------------------------------------------------------------ */
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'contenu',
      description: 'Chaque bloc = un titre, du texte et/ou une liste d’informations.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          fields: [
            defineField({ name: 'titre', title: 'Titre', type: 'string' }),
            defineField({
              name: 'texte',
              title: 'Texte',
              type: 'text',
              rows: 5,
              description: 'Un ou plusieurs paragraphes. Chaque retour à la ligne est conservé. Facultatif.',
            }),
            defineField({
              name: 'infos',
              title: 'Informations (libellé / valeur)',
              type: 'array',
              description: 'Liste de type « fiche ». Facultatif — utilisé pour l’éditeur et l’hébergeur.',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'info',
                  fields: [
                    defineField({ name: 'label', title: 'Libellé', type: 'string' }),
                    defineField({ name: 'valeur', title: 'Valeur', type: 'string' }),
                  ],
                  preview: { select: { title: 'label', subtitle: 'valeur' } },
                }),
              ],
            }),
          ],
          preview: { select: { title: 'titre', subtitle: 'texte' } },
        }),
      ],
      initialValue: [
        {
          _type: 'section',
          _key: 'editeur',
          titre: 'Éditeur du site',
          infos: [
            { _type: 'info', _key: 'raison', label: 'Raison sociale', valeur: 'Cabinet Ohayon & Associés' },
            { _type: 'info', _key: 'adresse', label: 'Adresse', valeur: '36, route d’Espagne — 31100 Toulouse' },
            { _type: 'info', _key: 'tel', label: 'Téléphone', valeur: '+33 (0)5 61 55 25 44' },
            { _type: 'info', _key: 'email', label: 'Email', valeur: 'contact@ohayon-associes.com' },
            { _type: 'info', _key: 'siren', label: 'SIREN', valeur: '340 930 098' },
            { _type: 'info', _key: 'tva', label: 'N° TVA intracommunautaire', valeur: 'FR 93 340 930 098' },
            { _type: 'info', _key: 'ape', label: 'Code APE', valeur: '6920Z — Activités comptables' },
            { _type: 'info', _key: 'directeur', label: 'Directeur de la publication', valeur: 'Cabinet Ohayon & Associés' },
          ],
        },
        {
          _type: 'section',
          _key: 'hebergement',
          titre: 'Hébergement',
          texte:
            'Le site est hébergé par OVH SAS, société par actions simplifiée au capital de 10 174 560 €, immatriculée au RCS de Lille Métropole sous le numéro 424 761 419.',
          infos: [
            { _type: 'info', _key: 'siege', label: 'Siège social', valeur: '2, rue Kellermann — 59100 Roubaix — France' },
            { _type: 'info', _key: 'tel', label: 'Téléphone', valeur: '1007' },
            { _type: 'info', _key: 'web', label: 'Site web', valeur: 'www.ovh.com' },
          ],
        },
        {
          _type: 'section',
          _key: 'propriete',
          titre: 'Propriété intellectuelle',
          texte:
            'L’ensemble des éléments constituant le site www.ohayon-associes.com (textes, graphismes, logos, icônes, images, photographies, sons, mise en page, charte graphique) est la propriété exclusive du Cabinet Ohayon & Associés ou de ses partenaires. Ces éléments sont protégés par les lois relatives à la propriété intellectuelle.\n\n' +
            'Toute reproduction, représentation, modification ou adaptation, intégrale ou partielle, par quelque procédé et sur quelque support que ce soit, sans autorisation écrite préalable du Cabinet Ohayon & Associés, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.',
        },
        {
          _type: 'section',
          _key: 'donnees',
          titre: 'Données personnelles',
          texte:
            'Conformément au Règlement général sur la protection des données (RGPD) et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité des données vous concernant.\n\n' +
            'Les informations recueillies via le formulaire de contact sont strictement destinées au Cabinet Ohayon & Associés et utilisées uniquement pour répondre à votre demande. Elles ne sont ni cédées ni vendues à des tiers.\n\n' +
            'Pour exercer vos droits ou pour toute question relative au traitement de vos données, vous pouvez nous contacter à l’adresse contact@ohayon-associes.com.\n\n' +
            'Vous disposez également du droit d’introduire une réclamation auprès de la CNIL (www.cnil.fr).',
        },
        {
          _type: 'section',
          _key: 'cookies',
          titre: 'Cookies',
          texte:
            'Le site n’utilise pas de cookies publicitaires ni de traceurs à des fins de profilage. Seuls des cookies strictement nécessaires au bon fonctionnement du site peuvent être déposés. Ils ne nécessitent pas votre consentement préalable.',
        },
        {
          _type: 'section',
          _key: 'liens',
          titre: 'Liens externes',
          texte:
            'Le site peut contenir des liens vers des sites tiers. Le Cabinet Ohayon & Associés n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.',
        },
        {
          _type: 'section',
          _key: 'droit',
          titre: 'Droit applicable',
          texte:
            'Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.',
        },
      ],
    }),
  ],

  preview: {
    select: { titre: 'heroTitre' },
    prepare: ({ titre }) => ({ title: titre || 'Mentions légales' }),
  },
})
