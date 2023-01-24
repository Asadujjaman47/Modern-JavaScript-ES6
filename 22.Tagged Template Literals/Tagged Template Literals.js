// Tagged Template Literals

function modifier(strings, ...values) {
    // console.log(strings);
    // [ 'We have ', ' and ', ' in our cricket team.' ]
    // console.log(values);
    // [ 'Shakib', 'Tamim' ]

    const m = strings.reduce((prev, current) => {
        return prev + current + (values.length ? "Mr. " + values.shift() : "")
    }, "");
    return m;
}

var player1 = "Shakib";
var player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);
// We have Mr. Shakib and Mr. Tamim in our cricket team.

