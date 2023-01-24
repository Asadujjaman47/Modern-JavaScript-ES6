// spread Operator

var numbers = [1, 2, 3];

// var newNumbers = [numbers[0], numbers[1], numbers[2], 6, 7];
var newNumbers = [...numbers, 6, 7];
console.log(newNumbers);
// [ 1, 2, 3, 6, 7 ]

var newNumbers2 = [...numbers, [6, 7]];
console.log(newNumbers2);
// [ 1, 2, 3, [ 6, 7 ] ]
var newNumbers2 = [...numbers, ...[6, 7]];
console.log(newNumbers2);
[ 1, 2, 3, 6, 7 ]


// in JavaScript, array and object are reference typeof
var a = [...numbers]; // exact copy of numbers

numbers.push(4);
console.log(numbers);
// [ 1, 2, 3, 4 ]

console.log(a);
// [ 1, 2, 3 ]


// concat 2 array
var number1 = [1, 2, 3];
var number2 = [4, 5, 6];

var numbers = [...number1, ...number2];
console.log(numbers);
[ 1, 2, 3, 4, 5, 6 ]