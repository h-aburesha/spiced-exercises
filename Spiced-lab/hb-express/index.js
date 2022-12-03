const express = require("express");
const app = express();

// console.log(teachers);

// Handlebars Setup
const { engine } = require("express-handlebars");
const projects = require("./projects.json");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// End of setup

app.use(express.static("./public"));
app.use(express.static("./projects"));

const cohortName = "Mint";

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        cohortName,
        projects,
    });
});

app.get("/about", (req, res) => {
    res.render("aboutTemplate", {
        teachers,
        cohortName,
    });
});

app.listen(3000, console.log("running at 3000"));
