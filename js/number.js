// Завдання 2.1
const positive = 42;
const negative = -15;
const decimal = 3.14;
const huge = 1e9;
const small = 5e-6;
const readable = 1_000_000;

console.log("Ціле додатне:", positive);
console.log("Ціле від'ємне:", negative);
console.log("Число з плаваючою крапкою:", decimal);
console.log("Дуже велике число:", huge);
console.log("Дуже мале число:", small);
console.log("Число з роздільником _:", readable);


// Завдання 2.2
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const notANumber = "text" * 5;

console.log("Infinity:", infinity);
console.log("-Infinity:", negativeInfinity);
console.log("NaN:", notANumber);


// Завдання 2.3
const result = 0.1 + 0.2;

console.log("0.1 + 0.2 =", result);

// Очікував отримати 0.3,
// Отримав 0.30000000000000004.
// Це особливість зберігання у JavaScript.


// Завдання 2.4
const maxSafe = Number.MAX_SAFE_INTEGER;

console.log("MAX_SAFE_INTEGER:", maxSafe);
console.log("+1:", maxSafe + 1);
console.log("+2:", maxSafe + 2);
console.log("+3:", maxSafe + 3);
console.log("+4:", maxSafe + 4);
console.log("+5:", maxSafe + 5);

// Починаючи з певного моменту JavaScript
// перестає точно розрізняти великі цілі числа.


// Завдання 2.5
const nan = NaN;

console.log("NaN + 5 =", nan + 5);
console.log("NaN - 5 =", nan - 5);
console.log("NaN * 5 =", nan * 5);
console.log("NaN / 5 =", nan / 5);

// Будь-яка операція з NaN
// також повертає NaN.