// new keyword in fat arrow function
function Person(name) {
    this.name = name;
}

var sakib = new Person('Sakib');
// no error get

/*
// but if we convert this function in arrow function
var Person = (name) => {
    this.name = name;
}

var sakib = new Person('Sakib');
// get error

// JS every function is a constructor function
*/

// So, if we use arrow function, then use cann't use new keyword


