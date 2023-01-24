const text = 'My Favorite colors are #FFFFFF and #000000';
const regex = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;

// const matches = text.match(regex);
// console.log(matches);
// [ '#FFFFFF', '#000000' ]


// matchAll()
const matchesAll = text.matchAll(regex); // it return iterator
for(let match of matchesAll) {
    console.log(matchesAll); // return matches object
}
