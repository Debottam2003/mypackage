// index.cjs
const team = ["Gaganandra Mondal", "Shubhranil Karmakar", "Debottam Kar"];

function randomInt(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function randomChoice(arr) {
  if (!arr || arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  return arr[randomInt(arr.length)];
}

module.exports = { team, randomInt, randomChoice, default: team };
