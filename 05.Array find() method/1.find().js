// Array.prototype.find()
var numbers = [1, 2, 3, 4, 5, 6, 10];

var result = numbers.find(function(currentValue) {
    return currentValue > 4;
});

console.log(result);

// more thing we get in 
//  find(currentValue, currentIndex, arr)


// it can also take 2nd parameter as this:
var result = numbers.find(function(currentValue, currentIndex, arr) {
    return currentValue > 4;
}, this);

console.log(result);