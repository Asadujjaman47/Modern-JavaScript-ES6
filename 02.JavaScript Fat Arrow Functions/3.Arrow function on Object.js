// this
var javadcript = {
    name: 'JavaScrippt',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        this.libraries.forEach(function(a) {
            console.log(`${this.name} loves ${a}`);
        });
    },
};

// javadcript.printLibraries();
// output:
    // undefined loves React
    // undefined loves Angular
    // undefined loves Vue



// CORRECTION: self = this;
var javadcript = {
    name: 'JavaScrippt',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        var self = this;
        this.libraries.forEach(function(a) {
            console.log(`${self.name} loves ${a}`);
        });
    },
};

javadcript.printLibraries();
// JavaScrippt loves React
// JavaScrippt loves Angular
// JavaScrippt loves Vue




// instead of save this in another varibale
// use arrow function:
var javadcript = {
    name: 'JavaScrippt',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
    },
};

javadcript.printLibraries();
// JavaScrippt loves React
// JavaScrippt loves Angular
// JavaScrippt loves Vue