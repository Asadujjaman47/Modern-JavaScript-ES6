// Array.prototype.push()
var numbers = [1, 2, 3, 4, 5];

numbers.push(7, 8);

console.log(numbers);
// [
//     1, 2, 3, 4,
//     5, 7, 8
// ]

numbers.push([11, 12, 13]);
console.log(numbers);
// [ 1, 2, 3, 4, 5, 7, 8, [ 11, 12, 13 ] ]