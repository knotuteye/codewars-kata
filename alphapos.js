function alphabetPosition(text) {
  return text
    .toUpperCase()
    .split("")
    .filter((a) => /^[a-zA-Z]+$/.test(a))
    .map((b) => b.charCodeAt(0) - 64)
    .reduce((x, y) => `${x} ${y}`, "\b")
    .toString().trim();
}

console.log(alphabetPosition(" The sunset sets at twelve o' clock."));
