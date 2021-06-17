/**
 *
 * @param {Array<number>} A
 * @returns
 */
function findOdd(A) {
  let odd = 0;
  A.forEach((x, i, arr) => {
    odd = arr.filter((y) => y == x).length % 2 == 1 ? x : odd;
  });
  return odd;
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
