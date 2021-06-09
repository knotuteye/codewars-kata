const comp = (array1, array2) => {
  if (array1 == null || array2 == null) return false;
  return array1.every((x) => {
    if (array2.includes(Math.pow(x, 2))) {
      array2.splice(array2.indexOf(Math.pow(x, 2)), 1);
      return true;
    }
    return false;
  });
};

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
