export const team = ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"];

export function randomInt(upperLimit) {
    let randomNumber = Math.floor(Math.random() * upperLimit);
    return randomNumber;
}

export function randomChoice(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return arr[randomInt(arr.length)];
}

export default team;