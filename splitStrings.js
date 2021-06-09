function solution(str) {
  return str
    .split("")
    .map((x, i, arr) =>
      i % 2 == 1 ? arr[i - 1] + x : i == arr.length - 1 ? x + "_" : undefined
    )
    .filter((x) => x);
}

console.log(solution("abcdef"));
