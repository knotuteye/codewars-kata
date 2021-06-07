// Memoization

function fib(n, memo = []) {
  if (n <= 2) return 1;
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  }
}

const oldFib = (n) => (n <= 2 ? 1 : oldFib(n - 1) + oldFib(n - 2));

console.log(fib(50));

console.log(oldFib(50));
