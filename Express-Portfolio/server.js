const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8081;
const dirCurrent = __dirname;
const url = require("url");
const express = require("express");
const app = express();

// const generateProjects = require(".generate-projects").generateProjects;

// import { generateProjects } from "./generate-projects.js";

const generateProjects = require("./generate-projects").generateProjects;

const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
};

// simple middleware that will be executed for every request.
// middleware is just a function
app.use((req, res, next) => {
    if (req.method !== "GET") {
        res.statusCode = 404;
        res.send();
    } else {
        // console.log("Express is working: ", req.url);
        next(); // needs to be called
    }
});

// middleware to serve static files from a specific folder
const staticMiddleware = express.static(path.join(dirCurrent, "projects"));
app.use(staticMiddleware);

app.get("/", (req, res) => {
    const finalHtml = generateProjects();
    res.setHeader("content-type", "text/html");
    res.send(finalHtml);
});

app.listen(PORT, () => {
    console.log(`Server is listening at EXPRESS-HOST! ${PORT} 🍣`);
});
