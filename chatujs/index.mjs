import { chars, alphabets } from "./array.mjs";

export const team = ["Gagan Mondal", "Shubhranil Karmakar", "Debottam Kar"];

export function randomInt(lowerLimit, upperLimit) {
    if (lowerLimit > upperLimit) {
        [lowerLimit, upperLimit] = [upperLimit, lowerLimit];
    }
    let randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    return randomNumber;
}

export function randomFloat(lowerLimit, upperLimit) {
    if (lowerLimit > upperLimit) {
        [lowerLimit, upperLimit] = [upperLimit, lowerLimit];
    }
    let randomNumber = Math.random() * (upperLimit - lowerLimit) + lowerLimit;
    return randomNumber;
}

export function randomChoice(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array must not be empty");
    }
    return arr[randomInt(0, (arr.length - 1))];
}

export function randomId() {
    return crypto.randomUUID();
}

export function randomPassword(len) {
    if (len > 0) {
        let resPassword = "";
        for (let i = 0; i < len; i++) {
            resPassword += chars[randomInt(0, 61)];
        }
        return resPassword;
    }
}

export function randomString(len) {
    if (len > 0) {
        let resString = "";
        for (let i = 0; i < len; i++) {
            resString += alphabets[randomInt(0, 51)];
        }
        return resString;
    }
}

export function randomShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = randomInt(0, array.length - 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default team;