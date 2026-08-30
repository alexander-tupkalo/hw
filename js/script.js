"use strict";

const numbers = [
    16, -37, 54, -4, 72, -56, 47, 4,
    -16, 25, -37, 46, 4, -51, 27, -63,
    4, -54, 76, -4, 12, -35, 4, 47
];

let positiveSum = 0;
let positiveCount = 0;

let min = numbers[0];
let minIndex = 0;

let max = numbers[0];
let maxIndex = 0;

let negativeCount = 0;

let oddPositiveCount = 0;
let evenPositiveCount = 0;

let oddPositiveSum = 0;
let evenPositiveSum = 0;

let positiveProduct = 1;

for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];

    if (number > 0) {
        positiveSum += number;
        positiveCount++;

        positiveProduct *= number;

        if (number % 2 === 0) {
            evenPositiveCount++;
            evenPositiveSum += number;
        } else {
            oddPositiveCount++;
            oddPositiveSum += number;
        }
    }

    if (number < 0) {
        negativeCount++;
    }

    if (number < min) {
        min = number;
        minIndex = i;
    }

    if (number > max) {
        max = number;
        maxIndex = i;
    }
}

console.log("Сума позитивних:", positiveSum);
console.log("Кількість позитивних:", positiveCount);

console.log("Мінімальний елемент:", min);
console.log("Порядковий номер:", minIndex + 1);

console.log("Максимальний елемент:", max);
console.log("Порядковий номер:", maxIndex + 1);

console.log("Кількість негативних:", negativeCount);

console.log("Кількість непарних позитивних:", oddPositiveCount);
console.log("Кількість парних позитивних:", evenPositiveCount);

console.log("Сума парних позитивних:", evenPositiveSum);
console.log("Сума непарних позитивних:", oddPositiveSum);

console.log("Добуток позитивних:", positiveProduct);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== max) {
        numbers[i] = 0;
    }
};

console.log("Масив після обнулення:", numbers);