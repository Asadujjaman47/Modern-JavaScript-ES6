// Ternary Operator
var age = 19;
/*
var type;
if(age >= 18) {
    type = "adult";
} else {
    type = "child";
}

// use ternary operator
var type = (age >= 18) ? "adult" : "child";
console.log(type);
*/

// multi line
var type = age >= 18 ? "adult" : age < 10 ? "child" : "young";
console.log(type);
