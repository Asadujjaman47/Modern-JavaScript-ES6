// object spreading
var myObj1 = {
    x: 1,
    y: 2
};

var myObj2 = {
    a: 1,
    b: 2
};

console.log({
    ...myObj1,
    ...myObj2
});
// { x: 1, y: 2, a: 1, b: 2 }