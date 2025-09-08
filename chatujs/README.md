# chatujs

My first npm package 🚀

This package exports a simple team list as an array of names and random Integer generator function, random
floating number, random element choice from array function and random id generation function.

## - - - Happy JSing - - -

## Installation

```bash
npm install chatujs

Usage
# ESM (Recommended)

import { team, randomInt, randomFloat, randomChoice, randomId } from "chatujs";

console.log("Team:", team);
// ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log("Random number:", randomInt(100));
// e.g., 42
-> Takes a upperlimit(Excluded) and gives a pseudo random number between (0 to upperlimit - 1).

console.log(randomFloat(50));
// 41.59340295897138

console.log("Random teammate:", randomChoice(team));
// e.g., "Shubhranil Karmakar"
-> randomChoice(arr) Takes an array of any type and returns random a element from the array.

console.log(randomId());
// f594d6ec-7af4-4ef9-ae2c-69cad3cc0361 (crypto package is used)

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
const { team, randomInt, randomFloat, randomChoice, randomId } = require("./index.cjs");

console.log(team);
// ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log(randomInt(100));
// Random integer 0–99

console.log(randomFloat(50));
// 41.59340295897138

console.log(randomChoice(team));
// Random name from team Ex. "Shubhranil Karmakar"

console.log(randomId());
// f594d6ec-7af4-4ef9-ae2c-69cad3cc0361 (crypto package is used)

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
```
