/**
 *
 * @param {string} text
 * @returns
 */
function duplicateCount(text) {
  return new Set(
    text
      .toUpperCase()
      .split("")
      .filter((letter, i, word) => word.filter((x) => x == letter).length > 1)
  ).size;
}

console.log(duplicateCount("aabBcde"));
