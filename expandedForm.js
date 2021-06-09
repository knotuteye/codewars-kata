function expandedForm(num) {
  return `${num}`
    .split("")
    .map((x, i) => x + "0".repeat(`${num}`.length - 1 - i))
    .filter((x) => x[0] != "0")
    .reduce((a, b) => a + " + " + b);
}

console.log(expandedForm(70304));
