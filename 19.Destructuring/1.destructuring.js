// destructuring 
const user = {
    id: 339,
    name: 'Sakib',
    age: 35
};

// get only name from this object

// old way:
// var name = user['name'];
// console.log(name);

// new way:
let { name } = user;
console.log(name); 


// keep name in title variable 
let { name: title } = user;
console.log(title);