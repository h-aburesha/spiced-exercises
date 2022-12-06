const https = require("https");
const express = require("express");
const app = express();

require("dotenv").config();
console.log(process.env);
const { TWITTER_API_KEY, TWITTER_API_SECRET } = PROCESS.env;
