class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("hello");
    }
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(function () {
            this.test();
        }, this);
    }
}

let student = new Student("sumit", 35);

student.exampleFunction();
// output:
    // hello
    // hello
    // hello


// we can also use arrow function:
// to avoid this
class Student2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("hello");
    }
    exampleFunction() {
        let array = [1, 2, 3];
        array.find(() => {
            this.test();
        });
    }
}

let student2 = new Student2("sumit", 35);

student2.exampleFunction();