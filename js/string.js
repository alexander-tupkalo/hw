// Завдання 4.1
const message1 = 'Привіт!';
const message2 = "Привіт!";
const message3 = `Привіт!`;

console.log("Одинарні лапки:", message1);
console.log("Подвійні лапки:", message2);
console.log("Зворотні лапки:", message3);


// Завдання 4.2
const text1 = "Він сказав: \"Це — 'звичайна' помилка\".";
const text2 = `Він сказав: "Це — 'звичайна' помилка".`;

console.log(text1);
console.log(text2);

// Через шаблонні літерали писати зручніше,не потрібно екранувати подвійні лапки.


// Завдання 4.3
const userName = "Олександр";
const userAge = 39;
const userCity = "Харків";

const introduction = `Привіт! Мене звати ${userName}, мені ${userAge} років, живу у ${userCity}. Це ${userAge * 12} місяців.`;

console.log(introduction);


// Завдання 4.4
console.log("Довжина рядка:", introduction.length);
console.log("Перший символ:", introduction[0]);
console.log("П'ятий символ:", introduction[4]);
console.log("Останній символ:", introduction[introduction.length - 1]);


// Завдання 4.5
const greeting = "Hello";

greeting[0] = "J";

console.log(greeting);

// Очікував отримати "Jello", але отримав "Hello".
// Рядок не змінився, тому що рядки в JavaScript є незмінними (immutable).