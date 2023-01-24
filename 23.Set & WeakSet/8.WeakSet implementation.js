/*
const ws = new WeakSet();

class SomeClass {
    constructor() {

    }
    method() {
        return 'i am method';
    }
}

// class object way:
const a = new SomeClass();
a.method();


// another way:
console.log(SomeClass.prototype.method());
// i am method
*/
// this way we can access any private property,


// to PREVENT this way:

const ws = new WeakSet();

class SomeClass {
    constructor() {
        ws.add(this);
    }
    method() {
        if(!ws.has(this)) {
            throw new Error('You cannot access this method directly');
        } else {
            return 'i am method';
        }
    }
}

// class object way:
const a = new SomeClass();
console.log(a.method()); // this way , got no error

// console.log(SomeClass.prototype.method()); // this way, got error

