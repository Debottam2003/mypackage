const lowercases = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
const uppercases = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabets = [...lowercases, ...uppercases];
const chars = [...lowercases, ...numbers, ...uppercases];

module.exports = { lowercases, uppercases, numbers, alphabets, chars }