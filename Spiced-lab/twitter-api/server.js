const https = require("https");
const express = require("express");
const { get } = require("http");
const app = express();
require("dotenv").config();
const path = require("path");
const dirCurrent = __dirname;

const getToken = require("./twitter").getToken;
const getTweets = require("./twitter").getTweets;
const filterTweets = require("./twitter").filterTweets;
const staticMiddleware = express.static(path.join(dirCurrent, "projects"));

// 1. get a Bearer Token by making a POST request with encoded Key and Secret
// 2. get the Tweets by making a GET request with Bearer Token
// 3. filter & format/simplify tweets
// 4. respond to the client with the filtered/formatted tweets

app.use(express.static("./projects"));
app.use(express.static("./ticker"));

app.get("/links.json", (req, res) => {
    getToken()
        .then((token) => {
            Promise.all([
                getTweets(token, "AP"),
                getTweets(token, "nytimes"),
                getTweets(token, "washingtonpost"),
            ]).then((tweets) => {
                // console.log("tweets", tweets);
                function sortFunction(a, b) {
                    var dateA = new Date(a.date).getTime();
                    var dateB = new Date(b.date).getTime();
                    return dateA > dateB ? 1 : -1;
                }
                const filteredTweets = filterTweets(tweets);
                res.json(filteredTweets.sort(sortFunction)); //
                // res.json(tweets.flat());
            });
        })
        .catch((err) => {
            // TASK: Check for error
            //      - send back empty JSON if there is an error
            // const filteredTweets = filteredTweets(tweets);

            console.log("My promise was rejected", err);
        });
});

// app.get("/links.json", (req, res) => {
//     getToken()
//         .then((token) => {
//             return getTweets(token, "nytimes");
//         })
//         .then((tweets) => {
//             // console.log("tweets", tweets);
//             const filteredTweets = filterTweets(tweets);
//             res.json(tweets);
//         })
//         .catch((err) => {
//             // TASK: Check for error
//             //      - send back empty JSON if there is an error
//             // const filteredTweets = filteredTweets(tweets);

//             console.log("My promise was rejected", err);
//         });
// });

// TASK: implement filterTweets function
//  - use the array method filter and map
//  - tipp: log the tweets and see how to access different information that we are interested in
//          example: tweets.entities.urls[0].url
//  - tipp: first filter and then change the structure with map
//      - we want to have something like { "text": "asdfasd", "url": "https://wp.com"}

app.listen(8080, () => {
    console.log("Server running on localhost:8080");
});
