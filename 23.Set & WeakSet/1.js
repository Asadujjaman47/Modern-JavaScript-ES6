function log(anything) {
    return console.log(anything);
}

// Sets
// let myArray = []; // literal syntax
let myArray = new Array();
myArray[0] = 5
myArray[1] = 2


// we cannot use leteral syntax in Set

let mySet = new Set();
// log(mySet)

mySet.add(5);
mySet.add('Bangladesh');
log(mySet)

// mySet.delete('Bangladesh');
log(mySet.has('Bangladesh'));
// true

mySet.add(6).add(7).add('Bangladesh').delete(5);
log(mySet);
{ 'Bangladesh', 6, 7 }

// mySet.clear();
// log(mySet);

log(mySet.size);