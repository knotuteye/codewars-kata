function findNb(m) {
  let n = 1;
  let sum = 0;
  while (Math.pow(n, 3) < m) {
    sum += Math.pow(n, 3);
    if (sum == m) return n;
    n++;
  }
  return -1;
}

console.log(findNb(1071225));
