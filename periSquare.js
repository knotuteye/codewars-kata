function fib(n, memo = []) {
  if (n <= 2) return 1;
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  }
}

function perimeter(n) {
  return (
    Array.from({ length: n + 1 }, (_, i) => i + 1)
      .map((x) => fib(x))
      .reduce((a, b) => a + b) * 4
  );
}

console.log(perimeter(5));
