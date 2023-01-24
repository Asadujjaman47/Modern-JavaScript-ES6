// swap value
var a = 1;
var b = 2;

/*
// old way:
var temp = a;
a = b;
b = temp;

console.log(a, b);
// 2 1
*/

// destrucing way:
[b, a] = [a, b];
console.log(a, b);
// 2 1