// SET from Array

// Array
let myArray = [1, 2, 3];

// Sets
let mySet = new Set(myArray);

console.log(mySet);
// { 1, 2, 3 }

// object is not iterable
// any iterable can insert in set, like: array, string

// iterate
for(let value of mySet){
    console.log(value);
}
// 1
// 2
// 3




// Array from SET
// here mySet convert to array:
console.log([...mySet]);
// [ 1, 2, 3 ]


// another way:
console.log(Array.from(mySet));
// [ 1, 2, 3 ]

