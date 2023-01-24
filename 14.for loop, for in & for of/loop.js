// for loop, for in & for of

/*
for(let i = 0; i <= 5; i++){
    console.log(i);
}
*/


// for in: iterate as object
const myObj = {
    name: 'JavaScript',
    estd: '1995',
    founder: 'Brendan Eich'
};

for(property in myObj){
    // console.log(property);
}
// name
// estd
// founder

// for of: 
const myArray = [1, 2, 3, 4, 5];

for (element of myArray){
    // console.log(element);
}
// 1
// 2
// 3
// 4
// 5

// for in array: index 
// for of array: only value


const myString = "I love JavaScript!";
for (element in myString){
    console.log(element);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17

for (element of myString){
    console.log(element);
}
// I
 
// l
// o
// v
// e
 
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t
// !