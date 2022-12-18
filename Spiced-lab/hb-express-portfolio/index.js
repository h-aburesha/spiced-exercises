const express = require("express");
const app = express();

// console.log(teachers);

// Handlebars Setup
const { engine } = require("express-handlebars");
const projectsList = require("./projects.json");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// End of setup

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("home", {
        //whatever you specify here,
        // it will be used as a body in the main.handlebars!
        // (i.e. home.handlebars)
        layout: "main",
        projects: projectsList,
        showImage: true,
        helpers: {
            getnewstyle: "/style.css",
        },
    });
});

app.get("/projects/:projectDirectory", (req, res) => {
    const projectDirectory = "/" + req.params.projectDirectory; // 'kitty-caroussel';
    const selectedProject = projectsList.find((p) => {
        console.log("projectdirectory", projectDirectory);
        return p.path === projectDirectory;
    });
    console.log(selectedProject);
    if (selectedProject === undefined) {
        res.statusCode = 404;
        res.end("PAGE NOT FOUND");
    } else
        res.render("home", {
            layout: "main",
            projects: projectsList,
            showImage: false,
            selectedProject: selectedProject,
            helpers: {
                getnewstyle: "/newstyle.css",
            },
        });
});

app.listen(3001, console.log("running at 3001"));
