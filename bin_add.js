function addBinary(a, b) {
  return ((a + b) >>> 0).toString(2);
}

const didMultiply = false;

function multiply(x, y) {
  didMultiply = true;
  return x * y;
}
