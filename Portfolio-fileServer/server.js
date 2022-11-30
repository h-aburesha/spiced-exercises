const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8081;
const dirCurrent = __dirname;

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

const server = http.createServer((req, res) => {
    req.on("error", (err) => {
        console.log("Error while getting request: ", err);
    });
    res.on("error", (err) => {
        console.log("Error while sending response: ", err);
    });

    // In total 3 big if statements

    // 1. Check if method is GET. If it is not. Send response with statuscode 400
    if (req.method !== "GET") {
        res.statusCode = 400;
        res.end();
        return;
    }

    // 2.
    if (req.url === "/") {
        res.end("Do homepage");
    }

    // 3.
    if (req.url !== "/") {
        // assuming req.url is '/ticker' for now
        // __dirname would result to current directory: /Users/zartin/ws/spiced-ws/lessons/02-node/06-portfolio-fileserver
        const pathToCheck = path.join(dirCurrent, "projects", req.url);
        const pathExisting = fs.existsSync(pathToCheck);
        if (pathExisting) {
            // if pathToCheck is a file, then
            if (fs.statSync(pathToCheck).isFile()) {
                const fileContent = fs.readFileSync(pathToCheck);
                const extension = path.extname(pathToCheck);
                res.setHeader("content-type", contentTypes[extension]);
                res.end(fileContent);

                // save content of file with fs.readFileSync() into variable fileContent;
                // const exension = path.extname(pathToCheck);
                // set headers of response object with setHeaders('content-type',contentTypes[exension]);
            }
            // else (then it is a directory)
            else {
                // does the req.url ends with a slash
                if (req.url.endsWith("/")) {
                    const indexHtmlPath = path.join(pathToCheck, "index.html");
                    if (fs.existsSync(indexHtmlPath)) {
                        // save content of index.html file with fs.readFileSync() into variable htmlContent;
                        const htmlContent = fs.readFileSync(indexHtmlPath);
                        res.end(htmlContent);
                    } else {
                        // set statuscode of response object to 404
                        res.statusCode = 404;
                        res.end();
                    }
                } else {
                    // set the statusCode of response object to 307
                    // set the response headers with setHeaders('location', req.url + '/')
                    res.end();
                }
            }
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT} 👽🎧👽`);
});
