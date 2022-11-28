const fs = require("fs");
const path = require("path");

const myPath = __dirname;
// console.log("myPath: ", myPath);

const baseFilePath = path.join(myPath, "files");
// console.log("baseFilePath: ", baseFilePath);

/* ----------------------
            fs Module
===========================
One function is Asynchronous and the other is Synchronized.
- Synchronized → One process at the time. Block the next process -> so we need to save in a variable
- Asynchronous →  The next process run along. -> so we need a callback function
*/

/* ----------------------
        writeFile
-----------------------*/
const filePath1 = path.join(myPath, "files", "message.txt");
// console.log("filePath: ", filePath);

//ASYNC
fs.writeFile(filePath1, "HI, good Morning Mint :D", (err) => {
    if (err) {
        console.log("Error in writeFile: ", err);
    }
    // console.log("Done!");
});

//SYNC
const filePath2 = path.join(myPath, "files", "newMessage.txt");
// console.log("filePath: ", filePath);

fs.writeFileSync(filePath2, "Hey, writing a new File");
// console.log("After writing Sync");

const obj = {
    name: "Maria",
    cohort: "Mint",
    year: 2022,
};
const filePath3 = path.join(myPath, "files", "newMessage.json");

fs.writeFileSync(filePath3, JSON.stringify(obj, null, 4));

/* -----------------------
        readFile
-------------------------*/

fs.readFile(filePath1, "utf8", (err, data) => {
    if (err) {
        console.log("Error in readFile: ", err);
    }
    // console.log("Data from readFile: ", data);
});

const data = fs.readFileSync(filePath2, "utf8");
// console.log("Data from readFileSync: ", data);

/* --------------------
        readdir
------------------------*/

fs.readdir(myPath, { withFileTypes: true }, (err, dirContent) => {
    if (err) {
        console.log("Error in readdir: ", err);
    }
    // console.log("dirContent: ", dirContent);
    // for (const entity of dirContent) {
    //     console.log("Entity: ", entity);
    //     console.log("Is file: ", entity.isFile());
    //     console.log("Is Directory: ", entity.isDirectory());
    // }
});

const dirContent = fs.readdirSync(baseFilePath, { withFileTypes: true });
// console.log("DirContent Sync: ", dirContent);

// for (const entity of dirContent) {
//     console.log("Entity: ", entity);
//     console.log("Is file: ", entity.isFile());
//     console.log("Is Directory: ", entity.isDirectory());
// }

/* -------------------------------------
            stat
 --------------------------------------- */

fs.stat(filePath3, (err, stats) => {
    if (err) {
        console.log("Error in stat");
    }
    console.log("Stat: ", stats.size);
});

const stat = fs.statSync(filePath2);
console.log("stat in Sync: ", stat);
