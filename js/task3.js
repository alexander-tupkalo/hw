"use strict";

const numberN = Number(prompt("Введіть число N:"));

for (let number = 1; number <= 100; number++) {

    if (number * number <= numberN) {
        console.log(number);
    }
}