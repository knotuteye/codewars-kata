function longestSlideDown(pyramid, row = 0, index = 0, sum = 0) {
  if (row == pyramid.length) return sum;
  let traversalArr = pyramid[row].slice(
    ...(index == 0 ? [0, 2] : [index, index + 2])
  );
  sum += Math.max(...traversalArr);
  index += traversalArr.indexOf(Math.max(...traversalArr));
  return longestSlideDown(pyramid, ++row, index, sum);
}

console.log(longestSlideDown([[11], [12, 13], [14, 15, 16], [90, 18, 19, 20]]));
