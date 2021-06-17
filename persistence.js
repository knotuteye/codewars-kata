/**
 *
 * @param {number} num
 */
function persistence(num, count = 0) {
  return num < 10
    ? count
    : persistence(
        num
          .toString()
          .split("")
          .map((x) => parseInt(x))
          .reduce((a, b) => a * b),
        count + 1
      );
}

console.log(persistence(999));
