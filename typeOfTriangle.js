var typeOfTriangle = function (sideA, sideB, sideC) {
  return [sideA, sideB, sideC].map((x) => parseInt(x)).includes(NaN)
    ? "Not a valid triangle"
    : { 1: "Scalene", 2: "Isosceles", 3: "Equilateral" }[
        [sideA, sideB, sideC].filter((x) => x === sideA).length
      ];
};
