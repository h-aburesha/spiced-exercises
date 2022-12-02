const app = require("express")();

const PORT = 3000;

const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "java?" || creds.pass != "script!") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401, "ACCESS DENIED!");
    } else {
        next();
    }
};

app.use("/secret-page", auth);
app.use(auth);

app.get("/", (req, res) => {
    res.send(`
    <h1>Hello there!</h1>
    <a href="/contact">Contact</a>
    <a href="/secret-page">Secret</a>
    `);
});

app.get("/contact", (req, res) => {
    res.send(`
    <h1>Contact page</h1>
    <a href="/">Home</a>
    <a href="/secret-page">Secret</a>
    `);
});
app.get("/secret-page", auth, (req, res) => {
    res.send(`<h1>This is top secret information!!!</h1>`);
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
