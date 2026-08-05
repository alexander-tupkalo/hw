"use strict";

const age = prompt("Введіть ваш вік:");
const numberAge = Number(age);

const isValidAge =
    age !== null &&
    age.trim() !== "" &&
    !Number.isNaN(numberAge) &&
    Number.isFinite(numberAge) &&
    Number.isInteger(numberAge);

if (!isValidAge) {
    alert("Некоректний ввід");
} else {

    if (numberAge < 0) {
        alert("Такого віку не існує");
    } else if (numberAge <= 6) {
        alert("Дошкільник");
    } else if (numberAge <= 17) {
        alert("Неповнолітній");
    } else if (numberAge <= 64) {
        alert("Дорослий");
    } else if (numberAge <= 120) {
        alert("Пенсіонер");
    } else {
        alert("Ви точно не бот?");
    }

    const canDrive =
        numberAge >= 18
            ? "Може керувати авто"
            : "Не може керувати авто";

    const ticket =
        numberAge < 7
            ? "Квиток: 0 грн"
            : numberAge <= 17 || numberAge >= 65
                ? "Квиток: 50 грн"
                : "Квиток: 100 грн";

    console.log(canDrive);
    console.log(ticket);

    console.log(age);
    console.log(numberAge);
}