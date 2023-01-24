// WeakSet 

// we must add object to weakset
const ws = new WeakSet();
ws.add({a: 1});

console.log(ws);

// another way:
const ws2 = new WeakSet([{a: 1}, {b: 2}]);
console.log(ws2);
// WeakSets are not iterables


