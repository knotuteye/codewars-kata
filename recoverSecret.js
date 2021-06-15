/**
 *
 * @param {Array<Array<string>>} triplets
 * @returns {string}
 */
var recoverSecret = function (triplets) {
  let weightObj = {};
  const MAX_WEIGHT = new Set(triplets.map((x) => x.join("")).join("")).size;

  for (let i = 0; i < triplets.length; i++) {
    triplets.forEach((x) => {
      x.forEach((y, i, arr) => {
        weightObj[y] = weightObj[y] || MAX_WEIGHT;
        if (arr[i + 1]) {
          weightObj[arr[i + 1]] = weightObj[arr[i + 1]] || MAX_WEIGHT;
          while (weightObj[y] >= weightObj[arr[i + 1]]) {
            weightObj[y] -= 1;
          }
        }
      });
    });
  }

  return Object.keys(weightObj)
    .sort((a, b) => weightObj[a] - weightObj[b])
    .join("");
};

console.log(
  recoverSecret([
    ["t", "u", "p"],
    ["w", "h", "i"],
    ["t", "s", "u"],
    ["a", "t", "s"],
    ["h", "a", "p"],
    ["t", "i", "s"],
    ["w", "h", "s"],
  ])
);
