const zero = (x) => createNumber(x, 0);
const one = (x) => createNumber(x, 1);
const two = (x) => createNumber(x, 2);
const three = (x) => createNumber(x, 3);
const four = (x) => createNumber(x, 4);
const five = (x) => createNumber(x, 5);
const six = (x) => createNumber(x, 6);
const seven = (x) => createNumber(x, 7);
const eight = (x) => createNumber(x, 8);
const nine = (x) => createNumber(x, 9);

const plus = (y) => `+${y}`;
const minus = (y) => `-${y}`;
const times = (y) => `*${y}`;
const dividedBy = (y) => `/${y}`;

const createNumber = (x, y) => (x ? parseInt(eval(`${y}${x}`)) : `${y}`);
