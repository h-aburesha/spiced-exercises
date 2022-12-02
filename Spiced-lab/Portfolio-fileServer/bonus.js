const fs = require("fs");
const path = require("path");
const url = require("url");
const { generateProjects } = require("./generate-projects");
const dirCurrent = __dirname;

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
generateProjects();

console.log(projectsArray);

// string.replace // or split
