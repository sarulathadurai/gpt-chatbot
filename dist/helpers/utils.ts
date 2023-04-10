export function replaceUrl(text: string) {
  const Rexp =
    /(\b(https?|ftp|file|www):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi;

  // Replacing the RegExp content by HTML element
  return text.replace(Rexp, "\n$3\n");
}
