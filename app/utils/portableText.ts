// Rendu minimal du « texte riche » Sanity (Portable Text) utilisé sur la home.
// On ne gère que ce que le schéma autorise : des paragraphes avec du gras.
// Chaque bloc = une ligne ; les retours à la ligne internes deviennent des <br>.

interface PortableSpan {
  _type?: string
  text?: string
  marks?: string[]
}
interface PortableBlock {
  _type?: string
  children?: PortableSpan[]
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function blockToInnerHtml(block: PortableBlock): string {
  return (block.children || [])
    .map((span) => {
      const text = escapeHtml(span.text || '').replace(/\n/g, '<br>')
      return span.marks?.includes('strong') ? `<strong>${text}</strong>` : text
    })
    .join('')
}

// Rend le texte sur une seule ligne logique (blocs séparés par des <br>).
// Utilisé là où le design attend un paragraphe unique (ex. hero).
export function richTextToHtml(blocks: unknown): string {
  if (!Array.isArray(blocks)) return ''
  return (blocks as PortableBlock[])
    .filter((block) => block?._type === 'block')
    .map(blockToInnerHtml)
    .join('<br>')
}

// Renvoie un tableau : un élément (HTML interne d'un paragraphe) par bloc.
// À utiliser avec un v-for de vrais <p> pour que le CSS scopé s'applique
// (le CSS scopé n'atteint pas le contenu injecté par un seul v-html).
export function richTextToParagraphArray(blocks: unknown): string[] {
  if (!Array.isArray(blocks)) return []
  return (blocks as PortableBlock[])
    .filter((block) => block?._type === 'block')
    .map(blockToInnerHtml)
}
