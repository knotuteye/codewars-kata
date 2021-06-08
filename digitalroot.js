function digital_root(n) {
  if (n.toString().length == 1) return n;
  return digital_root(
    n
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b), 0)
  );
}

console.log(digital_root(132189));
