const url = require("url");
const querystring = require("querystring");

const arguments = process.argv;
const lastArg = arguments[arguments.length - 1];

console.log(lastArg);

// const myUrl = new URL(
//     "https://spiced.academy/program/full-stack-web-development/"
// );

const myUrl = new URL("http://127.0.0.1:8080/test?a=100&b=200");

console.log("The protocol is: ", myUrl.protocol);
console.log("The host is: ", myUrl.host);
console.log("The hostname is: ", myUrl.hostname);
console.log("The port is: ", myUrl.port);
console.log("The query is: ", myUrl.query);
console.log("The pathname is: ", myUrl.pathname);

// console.log("hello Node");
// console.log(process.platform);

// const { EventEmitter } = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("lunch", () => {
//     console.log("Sushi time!🍣 ");
// });

// eventEmitter.emit("lunch");
// eventEmitter.emit("lunch");
