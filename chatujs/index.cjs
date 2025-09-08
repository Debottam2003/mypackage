// index.cjs
const team = ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"];

function randomInt(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function randomFloat(upperLimit) {
  let randomNumber = Math.random() * upperLimit;
  return randomNumber;
}

function randomChoice(arr) {
  if (!arr || arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  return arr[randomInt(arr.length)];
}

function randomId() {
  return crypto.randomUUID();
}

module.exports = { team, randomInt, randomFloat, randomChoice, randomId, default: team };
