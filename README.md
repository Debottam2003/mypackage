1. Package name 'chatujs'

npm install chatujs

Usage
ESM (recommended)

import team from "chatujs";
console.log(team);
Result: ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"]

CommonJS

const team = require("chatujs");
console.log(team);
-> { default: ["Gagan", "Shubhranil", "Debottam"] }

so,
const team = require("chatujs").default;
console.log(team);
Result: ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"]
