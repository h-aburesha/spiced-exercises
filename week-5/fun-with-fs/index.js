/* ------------------------------------------------ 
        Exercise - 1

const fs = require("fs");
const path = require("path");

const myPath = __dirname;

function logSizes(myPath) {
    const filesAll = fs.readdirSync(myPath, { withFileTypes: true });
    console.log("Files All: ", filesAll);

    for (const entity of filesAll) {
        if (entity.isFile()) {
            const newFilePath = path.join(myPath, `${entity.name}`);
            fs.stat(newFilePath, (err, stats) => {
                if (err) {
                    console.log("eff off");
                }
                console.log("newFilePath: ", newFilePath);
                console.log("Size: ", stats.size, "bytes!");
            });
        }
        if (entity.isDirectory()) {
            const newDirPath = path.join(myPath, `${entity.name}`);
            logSizes(newDirPath);
        }
    }
}
logSizes(myPath);

------------------------------------------------ */

/* ------------------------ 
        Exercise - 2
------------------------ */

const fs = require("fs");
const path = require("path");

const myPath = __dirname;
const objectsArrray = [];

function mapSizes(myPath) {
    let createdObject = {};
    let newFilePath;
    let newDirPath;

    const filesAll = fs.readdirSync(myPath, { withFileTypes: true });
    console.log("Files All: ", filesAll);

    for (const entity of filesAll) {
        if (entity.isFile()) {
            const newFilePath = path.join(myPath, `${entity.name}`);
            const stats = fs.statSync(newFilePath);
            createdObject = {
                name: `${entity.name}`,
                value: `${stats.size}`,
            };
            objectsArrray.push(createdObject);

            console.log("createdObject: ", createdObject);
        }
        // console.log("newFilePath: ", newFilePath);
        // console.log("Size: ", stats.size, "bytes!");
        if (entity.isDirectory()) {
            const newDirPath = path.join(myPath, `${entity.name}`);
            mapSizes(newDirPath);
        }
    }
    return objectsArrray;
}

console.log(
    "JSON: ",
    mapSizes(myPath),
    JSON.stringify(mapSizes(myPath), null, 4)
);
