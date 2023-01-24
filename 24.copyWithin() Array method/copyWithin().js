// copyWithin(target, start, end)
let a = ['JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST'];

// a.copyWithin(3, 2);
// console.log(a);
// [ 'JavaScript', 'PHP', 'Python', 'Python', 'Ruby', 'C++' ]


// a.copyWithin(6, 1, 2);
// console.log(a);
// [ 'JavaScript', 'PHP', 'Python', 'Ruby', 'C++', 'RUST' ] // no change

// a.copyWithin(3);
// console.log(a);
// [ 'JavaScript', 'PHP', 'Python', 'JavaScript', 'PHP', 'Python' ] // if no mention, then start with 0

// a.copyWithin(-3, -1, -2);
// console.log(a); // no change, Bcz copy work left to right

a.copyWithin(-3, -2, -1);
console.log(a); 
// [ 'JavaScript', 'PHP', 'Python', 'C++', 'C++', 'RUST' ]
