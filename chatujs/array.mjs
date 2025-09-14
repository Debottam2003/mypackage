export const lowercases = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
export const uppercases = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const alphabets = [...lowercases, ...uppercases];
export const chars = [...lowercases, ...numbers, ...uppercases];