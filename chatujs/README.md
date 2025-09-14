# chatujs

My first npm package 🚀

This package exports a simple team list (as an array of names) along with utility functions for generating:

- a random integer
- a random floating-point number
- a random element from an array
- a random ID

[![Version](https://img.shields.io/badge/version-1.2.0-blue)]()

## - - - Happy JSing - - -

## Installation

```bash
npm install chatujs
```

## Usage

### ESM (Recommended)

```js
import { team, randomInt, randomFloat, randomChoice, randomId, randomPassword, randomString } from "chatujs";

console.log("Team:", team);
-> ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log("Random number:", randomInt(0, 100));
-> Random integer between min and max (inclusive), e.g., 42

console.log(randomFloat(1, 50));
-> Random floating number between min (inclusive) and max (exclusive), e.g., 41.59

console.log("Random teammate:", randomChoice(team));
-> Takes an array and returns a random element, e.g., "Shubhranil Karmakar"

console.log(randomId());
-> e.g., f594d6ec-7af4-4ef9-ae2c-69cad3cc0361 (uses crypto)

console.log(randomString(15));
-> "vnZJlKpPHD5kdJE"

console.log(randomPassword(12));
-> "1ZJl5KpPHD5k"

```

You can also use the default export:

```js
import teamDefault from "chatujs";
console.log("Team (default):", teamDefault);
-> ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]
```

Or mix default + named imports:

```js
import teamDefault, { randomChoice } from "chatujs";
console.log(randomChoice(teamDefault));
-> e.g., "Debottam Kar"
```

---

### CommonJS

```js
const { team, randomInt, randomFloat, randomChoice, randomId, randomPassword, randomString } = require("chatujs");

console.log(team);
-> ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]

console.log("Random number:", randomInt(0, 100));
-> e.g., 42

console.log(randomFloat(1, 50));
-> e.g., 41.59

console.log(randomChoice(team));
-> e.g., "Shubhranil Karmakar"

console.log(randomId());
-> e.g., "f594d6ec-7af4-4ef9-ae2c-69cad3cc0361"

console.log(randomString(15));
-> "vnZJlKpPHD5kdJE"

console.log(randomPassword(12));
-> "1ZJl5KpPHD5k"

```

Import the default export:

```js
const team = require("chatujs").default;
console.log(team);
-> ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"]
```

Or require the full package:

```js
const pkg = require("chatujs");

console.log(pkg.team);
console.log(pkg.randomInt(1, 100));
console.log(pkg.randomChoice(pkg.team));
```

---
