var typeOfTriangle = function (sideA, sideB, sideC) {
  return [sideA, sideB, sideC].some((x) => typeof x !== "number" || x < 1) ||
    sideA + sideB <= sideC ||
    sideB + sideC <= sideA ||
    sideA + sideC <= sideB
    ? "Not a valid triangle"
    : { 1: "Scalene", 2: "Isosceles", 3: "Equilateral" }[
        Math.max(
          [sideA, sideB, sideC].filter((x) => x === sideA).length,
          [sideA, sideB, sideC].filter((x) => x === sideB).length
        )
      ];
};

console.log(typeOfTriangle(7, 5, 5));
