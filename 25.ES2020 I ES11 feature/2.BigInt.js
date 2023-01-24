/*
let largest_number = Number.MAX_SAFE_INTEGER;
console.log(largest_number);
largest_number += 1;
largest_number += 1;
console.log(largest_number);
// 9007199254740992 // maximum limit reached, so it no more increment
*/

// After ES11:
let largest_number = Number.MAX_SAFE_INTEGER;
largest_number += 1;
largest_number = BigInt(largest_number) + 1n;
console.log(largest_number);
// 9007199254740993n


// Equality
10n === BigInt(10); // true
10n == 10; // true
10n === 10; // false
