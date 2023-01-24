const text = 'My Favorite colors are #FFFFFF and #000000';
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2})(?<group3>[\da-fA-F]{2})/g;

const matchesAll = text.matchAll(regex); // it return iterator
for(let match of matchesAll) {
    console.log(matchesAll); // return group name
}
