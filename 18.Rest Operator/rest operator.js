// rest operator
// function parameter use rest operator
function myFunc(a, b) {
    console.log(a, b);
}

myFunc(2, 3);
// 2, 3


// if we not sure, how many paramter will given
function myFunc2() {
    console.log(arguments);
}

myFunc2(2, 3, 7, 8, 9);
// [Arguments] { '0': 2, '1': 3, '2': 7, '3': 8, '4': 9 }


function myFunc3(...params) {
    console.log(params);
}

myFunc3(2, 3, 7, 8, 9);
// [ 2, 3, 7, 8, 9 ]



// if parameter mension:
function myFunc4(a, ...params) {
    console.log(a);
    console.log(params);
}

myFunc4(2, 3, 7, 8, 9);
// 2
// [ 3, 7, 8, 9 ]

// parameter must be last formal parameter
// and single rest
