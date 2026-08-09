"use strict";

const number = Number(prompt("Введіть число:"));

let result = 1;

while (result < number) {
    result *= 3;
}

if (result === number) {
    console.log("Можна отримати як ступінь числа 3");
} else {
    console.log("Не можна отримати як ступінь числа 3");
}