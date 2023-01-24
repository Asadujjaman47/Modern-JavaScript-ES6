// Important object methods
var myObj = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1
};

// all keys
var keys = Object.keys(myObj);
console.log(keys);
// [ 'name', 'founder', 'estd', 'ranking' ]

// all values
var values = Object.values(myObj);
console.log(values);
// [ 'JavaScript', 'Brendan Eich', '1995', 1 ]


// entries: key-values pair
var entries = Object.entries(myObj);
console.log(entries);
// [
//     [ 'name', 'JavaScript' ],
//     [ 'founder', 'Brendan Eich' ],
//     [ 'estd', '1995' ],
//     [ 'ranking', 1 ]
// ]
