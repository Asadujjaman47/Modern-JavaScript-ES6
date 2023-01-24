// destructuring in nested object
const user = {
    id: 339,
    name: 'Sakib',
    age: 35,
    education: {
        degree: "Masters",
    },
};

const {education : { degree }} = user;
console.log(degree);