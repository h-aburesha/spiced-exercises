const https = require("https");
const express = require("express");
const { get } = require("http");
const app = express();
require("dotenv").config();

// console.log(process.env);
const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;
const combinedString = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
// console.log("combinedString: ", combinedString);

// TASK: use base64 encoding combinedString:
const encodedString = Buffer.from(combinedString).toString("base64"); // use Buffer.from().toString();
// console.log("encodedString: ", encodedString);

function getToken() {
    return new Promise((resolve, reject) => {
        const req = https.request({
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization: `Basic ${encodedString}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        });

        req.on("response", (res) => {
            // res is response from twitter API
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                // console.log("Response for getting Token: ", data);
                const dataJson = JSON.parse(data);
                resolve(dataJson.access_token);
                //callback(null, dataJson.access_token);
            });
            res.on("error", (err) => {
                reject(err);
                // callback(err, null);
            });
        });

        // Set body and end request
        req.end("grant_type=client_credentials");
    });
}

// TASK: implement logic for actual GET-Request for getting Tweets. See getToken() function for analogy
function getTweets(token, screen_name) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${screen_name}&count=20`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        req.on("response", (res) => {
            // res is response from twitter API
            let data = "";
            res.on("data", (chunk) => {
                data += chunk;
            });
            res.on("end", () => {
                // console.log("Response for getting Tweets: ", data);
                const dataJson = JSON.parse(data);
                resolve(dataJson);
                //callback(null, dataJson.access_token);
            });
            res.on("error", (err) => {
                reject(err);
                // callback(err, null);
            });
        });

        // Set body and end request
        req.end("grant_type=client_credentials");
    });
}

function filterTweets(tweets) {
    const filteredTweets = tweets.flat().filter((tweet) => {
        return tweet.entities.urls.length === 1;
    });
    // console.log("filteredTweets: ", filteredTweets);
    const newTweets = filteredTweets.map((tweet) => {
        // TASK for later: move urls from text
        return {
            newsProviderName: tweet.user.name,
            tweetText: tweet.text,
            tweetUrl: tweet.entities.urls[0].url,
            tweetDate: tweet.created_at,
        };
    });
    return newTweets;
}

exports.getToken = getToken;
exports.getTweets = getTweets;
exports.filterTweets = filterTweets;
