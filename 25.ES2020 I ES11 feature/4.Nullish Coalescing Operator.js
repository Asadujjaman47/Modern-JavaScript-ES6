/*
let language;
console.log(language ?? 'JavaScript'); // JavaScript
console.log(language || 'JavaScript'); // JavaScript
*/

/*
// OR and Nullish Coalescing Operator is difference
let language;
language = null;
console.log(language ?? 'JavaScript'); // JavaScript
console.log(language || 'JavaScript'); // JavaScript

// falsy value: false 0 blank null undefined NaN
*/

/*
let language;
language = NaN;
console.log(language ?? 'JavaScript'); // NaN
console.log(language || 'JavaScript'); // JavaScript
*/

/*
let language;
language = 0;
console.log(language ?? 'JavaScript'); // 0
console.log(language || 'JavaScript'); // JavaScript
*/

/*
let language;
language = false;
console.log(language ?? 'JavaScript'); // false
console.log(language || 'JavaScript'); // JavaScript
*/

let language;
language = '';
console.log(language ?? 'JavaScript'); // 
console.log(language || 'JavaScript'); // JavaScript



// we can mised this way:
// console.log(name.firstName || name.lastName ?? 'Anonymous'); // error

// to solve this, we need to use bracket
console.log((name.firstName || name.lastName) ?? 'Anonymous'); // Anonymous
