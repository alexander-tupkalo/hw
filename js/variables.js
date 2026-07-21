const firstName = "Олександр";
const lastName = "Тупкало";

let userAge = 38;

const city = "Харків";

let hobby = "Футбол";

const birthYear = 1988;

let favoriteColor = "Зелений";

console.log(firstName);
console.log(lastName);
console.log(userAge);
console.log(city);
console.log(hobby);
console.log(birthYear);
console.log(favoriteColor);


// Завдання 3.1
// Зміна значення let

console.log("Вік до дня народження:", userAge);

userAge = userAge + 1;

console.log("Вік після дня народження:", userAge);



// Завдання 3.2
// Спроба змінити const


// birthYear = 1989;

// Помилка:
// TypeError: Assignment to constant variable.


// ============================================================



// Завдання 3.3
// Повторне оголошення


// let firstName = "Олег";

// Помилка:
// SyntaxError: Identifier 'firstName' has already been declared



const introduction =
    "Привіт! Мене звати " +
    firstName +
    " " +
    lastName +
    ", мені " +
    userAge +
    " років, живу у " +
    city +
    ".";

console.log(introduction);