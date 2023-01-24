// arrow_function_in_event_Listner

const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

/*
// Normal function that works perfectly
function show() {
    console.log(this); // value exist
    display.innerHTML = this.value;
    setTimeout(function () {
        thanks.innerHTML = `You have typed: ${this.value}`; // this value has changed: undefined
    }, 1000);
}

searchInput.addEventListener("keyup", show);

*/


/*
// keep reference
function show() {
    display.innerHTML = this.value;
    var self = this;
    setTimeout(function () {
        thanks.innerHTML = `You have typed: ${self.value}`; // now we get the value
    }, 1000);
}

searchInput.addEventListener("keyup", show);

*/


// now we use arrow function, get undefine
searchInput.addEventListener("keyup", () => {
    display.innerHTML = this.value;
});

