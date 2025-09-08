// index.cjs
const team = ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"];

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

module.exports = { team, randomInt, randomFloat, randomChoice, randomId, default: team };
