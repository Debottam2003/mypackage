# chatujs

My first npm package 🚀

This package exports a simple team list as an array of names.

## Installation

```bash
npm install chatujs
```

Usage
# ESM (Recommended)

import { team, randomInt, randomChoice } from "chatujs";

console.log("Team:", team);
// ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log("Random number:", randomInt(100));
// e.g., 42
-> Takes a upperlimit(Excluded) and gives a pseudo random number between (0 to upperlimit - 1).

console.log("Random teammate:", randomChoice(team));
// e.g., "Shubhranil Karmakar"
-> randomChoice(arr) Takes an array of any type and returns random a element from the array.

------------------------------------------------------------
import teamDefault from "chatujs";
console.log("Team (default):", teamDefault);
// ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"]

-------------------------------------------------------------
import teamDefault, { randomChoice } from "chatujs";
console.log(randomChoice(teamDefault));
// Random member from team Ex. "Debottam Kar" 

# CommonJS

// example.cjs
const { team, randomInt, randomChoice } = require("./index.cjs");

console.log(team);
// ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log(randomInt(100));
// Random integer 0–99

console.log(randomChoice(team));
// Random name from team

-------------------------------------------------------------
const team = require("./index.cjs").default;
console.log(team);
// ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]

---------------------------------------------------------------
// example.cjs
const pkg = require("./index.cjs");

console.log(pkg.team);
// ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log(pkg.randomInt(100));
// Random integer 0–99

console.log(pkg.randomChoice(pkg.team));
// Random name from team

