export const team = ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"];

export function randomInt(lowerLimit, upperLimit) {
    let randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    return randomNumber;
}

export function randomFloat(lowerLimit, upperLimit) {
    let randomNumber = Math.random() * (upperLimit - lowerLimit) + lowerLimit;
    return randomNumber;
}

console.log(randomFloat(1, 50));

export function randomChoice(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return arr[randomInt(0, (arr.length - 1))];
}

console.log(randomChoice(team));

export function randomId() {
    return crypto.randomUUID();
}

export default team;