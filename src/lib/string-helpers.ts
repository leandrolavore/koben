function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function highlightMatchedWord({
  text,
  word
}: {
  text: string;
  word: string;
}) {
  const escapedWord = escapeRegExp(word);
  const regex = new RegExp(`(${escapedWord})`, 'gi');

  return text.replace(regex, '<strong>$1</strong>');
}

export function capitalizeFirstLetter(text: string) {
  if (!text) return text;

  return text.charAt(0).toUpperCase() + text.slice(1);
}