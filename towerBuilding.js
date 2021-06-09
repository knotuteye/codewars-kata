function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 0; i < nFloors; i++) {
    arr.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(2 * i + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return arr;
}

console.log(towerBuilder(3));
