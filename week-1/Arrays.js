// // Martin - 03.11.2022

// function sum(par1, par2, par3) {
//     return par1 + par2 + par3;
// }

// sum(2, 4, 5);

// // anon syntax
// const sum2 = (par1, par2, par3) => {
//     return par1 + par2 + par3;
// };

// // nested functions

// function logTimeout() {
//     console.log("Delayed Log");
// }

// setTimeout(logTimeout, 2000);

// function sayHello() {
//     console.log("hello");
// }

colors = ["cyan", "magenta", "teal", "purple"];

const shortwordColors = colors.filter((color) => {
    const isShort = color.length <= 4;
    return isShort;
});

console.log(shortwordColors);

// let colors = ["cyan", "magenta", "blue", "purple"];

// const shortWordColors = colors.filter((color) => {
//     let isShortWord = color.length <= 4;
//     return isShortWord; // need to return true or false;
//     //when true it WILL BE included in new Array
// });
// console.log(shortWordColors);

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["programming", "biking"],
    "2Property": "random value",
    address: {
        street: "Friedrichstr",
        number: 122,
        city: "Berlin",
    },
};

console.log(
    "Hi my address is:",
    person.address.street,
    person.address.number,
    person.address.city
);
