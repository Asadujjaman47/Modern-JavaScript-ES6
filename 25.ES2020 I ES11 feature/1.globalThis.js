// browser code run:
// window.setTimeout(() => console.log('hello'), 100);


// in node: window is global 
// global.setTimeout(() => console.log('hello'), 100);


// server + browser : code run
// old ways:
// The global this was not standardized before ES11. Solution was
// var setGlobal = function() {
//     if(typeof window === 'undefined') { return window; }
//     if(typeof global === 'undefined') { return global; }
//     throw new Error('unable to locate a global object');
// }

// var myGlobal = setGlobal();
// myGlobal.setTimeout(() => console.log('hello'), 100);



// from ES11 we can use globalThis
globalThis.setTimeout(() => console.log('hello'), 100);