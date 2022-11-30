const http = require("http");
// const qs = require("querystring");
const { URLSearchParams } = require("url");
const chalk = require("chalk");
const fs = require("fs");

const PORT = 8080;

// Readstream creation:

const readstream = fs.createReadStream("request.txt", "utf8");

readstream.on("data", (chunk) => {
    body += chunk;
});

readstream.on("end", () => {
    console.log("end res with body: ", body);
});

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("Error in request:", err));
    response.on("error", (err) => console.log("Error in response:", err));

    if (request.method === "GET") {
    }
});
