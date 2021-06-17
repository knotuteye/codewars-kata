function solution(number) {
  if (!number || number < 0) return 0;
  let multipleArr = [];
  for (let i = 0; i < number; i++)
    if (i % 3 === 0 || i % 5 === 0) multipleArr.push(i);

  return multipleArr.reduce((a, b) => a + b);
}

console.log(solution(10));
