// if some property some time given, and again some time not given, then give default value
const user = {
    id: 339,
    name: 'Sakib',
    age: 35,
    // education: {
    //     degree: "Masters",
    // },
};

const {education : { degree } = {} } = user;
console.log(degree);