const fs = require("fs");
const path = require("path");
const url = require("url");
const dirCurrent = __dirname;

/* ------------------------------------------------------------------------------------
                        // OR use fs.readDirYnc for example
   ------------------------------------------------------------------------------------

let projectUrl;
let projectName;

const projectsArray = [];

function renderResults(dirCurrent) {
    const projectPath = path.join(dirCurrent, "projects");
    const projectDirAll = fs.readdirSync(projectPath, { withFileTypes: true });

    // console.log("projectDirAll ", projectDirAll);

    for (const entity of projectDirAll) {
        createdObject = {
            projectUrl: `${projectPath}/${entity.name}`,
            projectName: `${entity.name}`,
        };

        projectsArray.push(createdObject);

        // console.log("createdObject: ", createdObject);
    }

    return projectsArray, projectUrl, projectName;
}
renderResults(dirCurrent);

console.log(projectsArray);

------------------------------------------------------------------------------------
------------------------------------------------------------------------------------ */
/*

const projects = [
    { url: "/connect4", name: "Connect Four" },
    { url: "/incremental-search", name: "Incremental Search" },
    { url: "/kitty-carrousel", name: "Kitty Carrousel" },
    { url: "/spotify-search", name: "Spotify Search" },
    { url: "/ticker", name: "News Ticker" },
];

// OR more advanced version: use fs.readDirSync for example

function generateProjects() {
    let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Projects </title>
        </head>
        <body>`;
    for (let i = 0; i < projects.length; i++) {
        html += `
        <a href="${projects[i].url}">
        <h1>${projects[i].name}</h1>
        </a>
        `;
    }

    // loop through the projects variable and add information to html variable
    return html + `</body></html>`;
}

// export function

generateProjects(projects);
console.log(generateProjects(projects));

module.exports = { generateProjects }

*/
