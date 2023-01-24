// Array.prototype.findIndex() method
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = numbers.findIndex((currentValue, index, arr) => {
    // return !(currentValue % 2);
    return currentValue > 6;
});

console.log(result); // return index

// if value not exist, return -1