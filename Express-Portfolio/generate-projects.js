const fs = require("fs");
const path = require("path");
const url = require("url");
const dirCurrent = __dirname;

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
            <style>
                body {background-color: powderblue;}
                h1   {color: green;}
                a    {color: blue;}
                </style>
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

// generateProjects(projects);
// console.log(generateProjects(projects));

exports.generateProjects = generateProjects;
