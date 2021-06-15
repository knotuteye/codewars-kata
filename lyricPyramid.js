function longestSlideDown(pyramid, row = 0, index = 0, sum = 0) {
  if (row == pyramid.length) return sum;
  let traversalArr = pyramid[row].slice(
    ...(index == 0 ? [0, 2] : [index - 1, index + 2])
  );
  sum += Math.max(...traversalArr);
  index += traversalArr.indexOf(Math.max(...traversalArr));
  return longestSlideDown(pyramid, ++row, index, sum);
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));
