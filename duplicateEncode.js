/**
 *
 * @param {string} word
 */
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((letter, i, arr) =>
      arr.filter((x) => x == letter).length > 1 ? ")" : "("
    )
    .join("");
}
