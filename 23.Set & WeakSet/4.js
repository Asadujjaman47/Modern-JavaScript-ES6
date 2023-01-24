// Sets use:

// unique element:
let myArray = [1, 2, 3];

// Sets
let mySet = new Set(myArray);
mySet.add({
    a: 5,
    b: 2
});

console.log(mySet);
// Set(4) { 1, 2, 3, { a: 5, b: 2 } }

// again same object add:
mySet.add({
    a: 5,
    b: 2
});
console.log(mySet);
// Set(5) { 1, 2, 3, { a: 5, b: 2 }, { a: 5, b: 2 } }
// it add same object



// but same instance will not add
let obj = {
    a: 7,
    b: 8,
};

mySet.add(obj);
mySet.add(obj);

console.log(mySet);
// Set(6) { 1, 2, 3, { a: 5, b: 2 }, { a: 5, b: 2 }, { a: 7, b: 8 } }
// it insert only one time
