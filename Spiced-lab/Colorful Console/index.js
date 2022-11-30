const http = require("http");
// const qs = require("querystring");
const { URLSearchParams } = require("url");
const chalk = require("chalk");

const PORT = 3000;

const server = http
    .createServer((req, res) => {
        req.on("error", (err) => console.log("error in request: ", err));
        res.on("error", (err) => console.log("error in response: ", err));

        if (req.method === "GET") {
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;

            res.write(`<!doctype html>
                        <html>
                        <title>Colors</title>
                        <form method="POST">
                        <input type="text" name="text" placeholder="Choose a color">
                        <select name="color">
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="gray">Gray</option>
                            <option value="magenta">Magenta</option>
                            <option value="cyan">Cyan</option>
                        </select>
                        <button type="submit">Go</button>
                        </form>
                        </html>`);
            res.end();
        } else if (req.method === "POST") {
            let body = "";

            req.on("data", (chunk) => {
                console.log("chunk: ", chunk);
                body += chunk;
            });

            req.on("end", () => {
                // console.log("body: ", body);
                // const parsedBody = qs.parse(body);
                // console.log("body parsed: ", parsedBody);
                // console.log(parsedBody.name);

                const params = new URLSearchParams(body);
                let paramsText = chalk.keyword(params.get("color"));
                console.log("Params: ", paramsText);

                res.setHeader("content-type", "text/html");
                res.statusCode = 200;

                res.end(
                    `<a href="http://localhost:3000/"><h3 style="color:${params.get(
                        "color"
                    )};">Your color was: ${params.get("color")}!</h3></a>`
                );
            });
        }
    })

    .listen(PORT, () =>
        console.log(`Server is listening at http://localhost:${PORT} 🎧`)
    );
