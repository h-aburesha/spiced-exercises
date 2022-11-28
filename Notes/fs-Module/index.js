const fs = require("fs");
const module = require("module");
const path = require("path");
const myPath = __dirname;
console.log("Current Path: ", myPath);

const baseFilePath = path.join(myPath, "files");
console.log("baseFilePath: ", baseFilePath);

/*-------------------------
        FS MODULE 
--------------------------*/

/*-------------------------
        Write File 
--------------------------*/

const filePath = path.join(file, "files", "message.txt");

fs.writeFile(filePath, "Hi, bla bla", (err) => {
    if (err) {
        console.log("Error in Writefile: ", err);
    }
    console.log("Done");
});

// SYNC

filePath = path.join(myPath, "files", "newMessage.txt");
console.log("filePath: ", filePath);

fs.writeFileSync(filePath, "Hey, writing a new file");
console.log("After writing Sync");
