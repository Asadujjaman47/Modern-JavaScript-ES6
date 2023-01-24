// convet array to set to array for uniqye element
let myArray = [1, 2, 3, 4, 5, 5, 5, 6, 5];

console.log([...new Set(myArray)]);
// [ 1, 2, 3, 4, 5, 6 ]


// set union a U n
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
console.log(union);
// Set(4) { 1, 2, 3, 4 }


// set intersection a ∩ b
let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);
// Set(2) { 2, 3 }



// difference a \ b

let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);
// Set(1) { 1 }
