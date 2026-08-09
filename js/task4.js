"use strict";

const number = Number(prompt("Введіть ціле число:"));

let isSimple = true;

if (number <= 1) {
    isSimple = false;
} else {

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            isSimple = false;
            break;
        }
    }
}

if (isSimple) {
    console.log("Число просте");
} else {
    console.log("Число не просте");
}