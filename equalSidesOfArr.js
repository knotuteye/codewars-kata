function findEvenIndex(arr) {
  let result = -1;
  arr.forEach((x, i) => {
    if (
      arr.slice(0, i).reduce((a, b) => a + b, 0) ===
      arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0)
    ) {
      result = i;
    }
  });
  return result;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
