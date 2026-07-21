
// Завдання 3.1
const bigInt1 = 123456789012345678901234567890n;
const bigInt2 = BigInt("123456789012345678901234567890");

console.log("BigInt через n:", bigInt1);
console.log("Тип:", typeof bigInt1);

console.log("BigInt через BigInt():", bigInt2);
console.log("Тип:", typeof bigInt2);



// Завдання 3.3
const a = 10n;
const b = 10;

console.log("a === b:", a === b);
console.log("a == b:", a == b);

console.log("typeof a:", typeof a);
console.log("typeof b:", typeof b);

// === порівнює і значення, і тип.
// == порівнює тільки значення після автоматичного перетворення.


// Завдання 3.4
// Змішування BigInt і Number

// const result = 10n + 5;

// Помилка:
// TypeError: Cannot mix BigInt and other types, use explicit conversions.



