/**
 *
 * @param {string} str
 */
function permutations(str) {
  if (str.length < 2) return [str];

  let permutationArray = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

    for (const perm of permutations(remainingChars)) {
      permutationArray.push(char + perm);
    }
  }

  return [...new Set(permutationArray)];
}

console.log(permutations("aabb"));
