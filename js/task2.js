'use strict';

const inputSeconds = prompt("Введіть кількість секунд:");
const seconds = Number(inputSeconds);

const isValidSeconds =
    inputSeconds !== null &&
    inputSeconds.trim() !== "" &&
    !Number.isNaN(seconds) &&
    Number.isFinite(seconds) &&
    Number.isInteger(seconds);

if (!isValidSeconds || seconds < 0) {
    alert("Некоректний ввід");
} else {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const finalSeconds = remainingSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(finalSeconds).padStart(2, "0");

    const result = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    console.log(result);
}

//-------------------------------------------

const inputNumber = prompt("Введіть ціле додатне число:");
const number = Number(inputNumber);

const isValidNumber =
    inputNumber !== null &&
    inputNumber.trim() !== "" &&
    Number.isInteger(number) &&
    number > 0;

if (!isValidNumber) {
    alert("Некоректний ввід");
} else {
    let currentNumber = number;
    let sum = 0;

    while (currentNumber > 0) {
        const number = currentNumber % 10;

        sum += number;

        currentNumber = Math.floor(currentNumber / 10);
    }

    let numberForRoot = sum;
    let chain = String(number) + " → " + sum;

    while (numberForRoot >= 10) {
        let currentNumber = numberForRoot;
        let newSum = 0;

        while (currentNumber > 0) {
            const number = currentNumber % 10;

            newSum += number;

            currentNumber = Math.floor(currentNumber / 10);
        }

        numberForRoot = newSum;
        chain += " → " + numberForRoot;
    }

    console.log(`Сума цифр: ${sum}`);
    console.log(`Цифровий корінь: ${numberForRoot}`);
    console.log(chain);
}

//-------------------------------------------------

const inputAmount = prompt("Введіть суму в гривнях:");
const amount = Number(inputAmount);

const isValidAmount =
    inputAmount !== null &&
    inputAmount.trim() !== "" &&
    Number.isInteger(amount) &&
    amount > 0;

if (!isValidAmount) {
    alert("Некоректний ввід");
} else {
    const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];

    let rest = amount;
    let totalCount = 0;

    for (const nominal of nominals) {
        const count = Math.floor(rest / nominal);

        if (count === 0) {
            continue;
        }

        rest = rest % nominal;
        totalCount += count;

        console.log(`${nominal} x ${count}`);

        if (rest === 0) {
            break;
        }
    }

    console.log(`Загальна кількість: ${totalCount}`);
}