const escapes: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

/**
 * Returns HTML for display-size text with optically kerned punctuation.
 *
 * Plus Jakarta Sans gives `.` and `,` wide sidebearings, which reads as a
 * stray space after the preceding letter at headline sizes. Wrapping them in
 * `.punct` (see global.css) pulls them back toward the word.
 */
export function kern(text: string): string {
  return text.replace(/[&<>"]/g, (c) => escapes[c]).replace(/(?<=\p{L})([.,])/gu, '<span class="punct">$1</span>');
}
