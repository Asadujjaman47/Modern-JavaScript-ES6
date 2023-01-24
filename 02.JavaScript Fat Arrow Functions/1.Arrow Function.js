// ES6 fat arrow function
function number() {
    return 10;
}

console.log(number());
// 10

// arrow function
let num = () => {
    return 11;
}

console.log(num());
// 11

// single statement of arrow function:
let num2 = () => 10;

console.log(num2());
// 10

let num3 = () => console.log(12);

num3();
// 12

// single line: return will omit
let num4 = () => 13;
console.log(num4());
// 13

// Parameter:
// fat array:
function num5(n) {
    return n;
}

// arrow function with parameter 
let num6 = n => n;

console.log(num6(14));
// 14

// multiple parameter:
let num7 = (a, b) => a+b;

console.log(num7(4, 6));
// 10



