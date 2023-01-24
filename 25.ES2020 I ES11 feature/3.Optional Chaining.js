let language = {
    name: 'JavaScript',
    creator: 'Brendan Eich',
    library: {
        react: {
            company: 'Facebook'
        }
    }
};

// let company = language.library.react.company;
// console.log(company);
// this is not right way, additionally we have check this property is exist or not
// it may creash app


// instead of this, we can use this
// let company = language && language.library && language.library.react && language.library.react.company;
// console.log(company);
// but it is painful

// So, we use Optional Chaining feature:
let company = language?.library?.react?.company;
console.log(company);



// Arrays
let colors = ['red', 'green', 'blue'];
colors = null;
console.log(colors?.[1]);