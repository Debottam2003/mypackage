const { chars, alphabets } = require("./array.cjs");

const team = ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"];

let shuffled_chars = randomShuffle(chars);
let shuffled_alphabets = randomShuffle(alphabets);

function randomInt(lowerLimit, upperLimit) {
  let randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
  return randomNumber;
}

function randomFloat(lowerLimit, upperLimit) {
  let randomNumber = Math.random() * (upperLimit - lowerLimit) + lowerLimit;
  return randomNumber;
}

function randomChoice(arr) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  return arr[randomInt(0, (arr.length - 1))];
}

function randomId() {
  return crypto.randomUUID();
}

function randomPassword(len) {
  if (len > 0) {
    let resPassword = "";
    for (let i = 0; i < len; i++) {
      resPassword += shuffled_chars[randomInt(0, 61)];
    }
    return resPassword;
  }
}

function randomString(len) {
  if (len > 0) {
    let resString = "";
    for (let i = 0; i < len; i++) {
      resString += shuffled_alphabets[randomInt(0, 51)];
    }
    return resString;
  }
}

function randomShuffle(arr) {
  let new_arr = [...arr];
  for (let i = new_arr.length - 1; i > 0; i--) {
    const j = randomInt(0, new_arr.length - 1);
    [new_arr[i], new_arr[j]] = [new_arr[j], new_arr[i]];
  }
  return new_arr;
}

module.exports = { team, randomInt, randomFloat, randomChoice, randomId, randomPassword, randomString, randomShuffle, default: team };
