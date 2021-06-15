var moveZeros = function (arr) {
  count = 0;
  let result = arr.filter((x) => {
    if (x === 0) {
      count++;
    }
    return x !== 0;
  });

  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  return result;
};
