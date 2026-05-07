#!/usr/bin/env node
import { randomPassword } from "chatujs";
let flag = process.argv[2];
let l = "";
if (flag === '-l' || flag === '--length') {
    l = process.argv[3];
    if (!l) {
        console.log("Provide the length value.");
    } else {
        if (!isNaN(l)) {
            l = parseInt(l);
            if (l <= 0) {
                console.log("Length must be greater than 0.");
            } else {
                console.log(`Password/Id: ${randomPassword(l)}`);
            }
        } else {
            console.log("Length must be a number.");
        }
    }
} else if (!flag) {
    console.log(` (Default length used) Password/Id: ${randomPassword(8)}`);
} else {
    console.log(`${flag} is a unknown flag.`);
}