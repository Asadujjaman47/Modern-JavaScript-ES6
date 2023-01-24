// array destructuring
var numbers = [1, 2, 3, 4, 6];

var [a, b] = numbers;

console.log(a, b);
// 1 2]


// but if we need a=2, b=6

var [, a, , ,b] = numbers;
console.log(a, b);
// 2 6

