// array destructuring
var numbers = [1, 2, [3, 100, 500], 4, 6];

// get a=100, b=500
var [, , [, a, b]] = numbers;
console.log(a, b);
// 100 500

