const http = require("http");
const fs = require("fs");
const url = require("url");

const path = require("path");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const generateProjects = require("./generate-projects").generateProjects;
const basicAuth = require("basic-auth");

const PORT = 8081;
const dirCurrent = __dirname;

const staticMiddleware = express.static(path.join(dirCurrent, "projects"));

const urlEncodedMiddleware = express.urlencoded({ extended: false });
app.use(urlEncodedMiddleware);

// simple middleware that will be executed for every request.
// middleware is just a function

/*
app.use((req, res, next) => {
    if (req.method !== "GET") {
        res.statusCode = 404;
        res.send();
    } else {
        // console.log("Express is working: ", req.url);
        next(); // needs to be called
    }
});
*/

// middleware to serve static files from a specific folder

// check if we are allowed to visit url by checking cookies
app.use(cookieParser()); //

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "java?" || creds.pass != "script!!") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401, "ACCESS DENIED!");
    } else {
        next();
    }
};

app.use("/ticker", auth);
app.use(staticMiddleware);

app.use((req, res, next) => {
    if (req.url.startsWith("/cookies")) {
        next();
    } else {
        if (req.cookies.accepted === "on") {
            next();
        } else {
            // save information about initial request in a global variable
            res.redirect("/cookies");
        }
    }
});

app.post("/cookies", (req, res) => {
    console.log("Body of request: ", req.body);

    res.cookie("accepted", req.body.cookies);
    if (req.body.cookies === "on") {
        res.redirect("/"); // redirect to the initial page
    } else {
        // else
        res.redirect("/cookies"); // redirect to /cookies
    }
    // req.body.accepted;
    console.log("Body of request: ", req.body);
});

app.get("/cookies", (req, res) => {
    // Cookies that have not been signed
    const cookiesPath = path.join(dirCurrent, "cookies", "index.html");
    res.sendFile(cookiesPath);

    console.log("Cookies: ", req.cookies);
});

app.get("/", (req, res) => {
    const finalHtml = generateProjects();
    res.setHeader("content-type", "text/html");
    res.send(finalHtml);
});

app.listen(PORT, () => {
    console.log(`Listening @ PORT:${PORT} 🧨`);
});
