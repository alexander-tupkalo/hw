
// використовував name2, calculate1, calculate2, calculate3, user1, user2, user3, щоб не було помилок повторного оголошення змінних та функцій

// Сцена 1
let name;
console.log(name);

//Сцена 2
let name2 = null;
console.log(name);

// Сцена 3
function greet(user) {
  console.log('Hello,', user);
}
greet();

// Сцена 4
function calculate1(a, b) {
  return a + b;
  // забули повернути результат окремої змінної
}
console.log(calculate1(2, 3));

// Сцена 5
function calculate2(a, b) {
  let result = a + b;
  // не написали return
}
console.log(calculate2(2, 3));

// Сцена 6
function calculate3(a, b) {
  return;
}
console.log(calculate3(2, 3));

// Сцена 7
const user1 = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log(user1.age);

// Сцена 8
const user2 = {
  firstName: 'John',
  middleName: null,   // розробник свідомо сказав, що середнього імені немає
  lastName: 'Doe'
};
console.log(user2.middleName);

// Сцена 9
const arr = [10, 20, 30];
console.log(arr[10]);

// Сцена 10
const user3 = {
  name: 'Anna',
  address: {
    city: 'Kyiv'
  }
};
console.log(user3.address.street);


// Завдання 3

function describeEmpty(value) {
    if (value === undefined) {
        return 'Це undefined — JavaScript сам поставив або значення не задано';
    }

    if (value === null) {
        return 'Це null — розробник свідомо сказав, що тут порожньо';
    }

     return `Це не є порожнім значенням: ${typeof value}, ${value}`;
}

console.log(describeEmpty(null));
console.log(describeEmpty(undefined));
console.log(describeEmpty(0));
console.log(describeEmpty(''));
console.log(describeEmpty([]));
console.log(describeEmpty(false));

// Завдання 4

let userName = 'Anna';
let userAge = 25;

console.log('name:', userName);
console.log('age', userAge);

function getGreeting(name) {
  return(`Hello, ${name}`);
}

const message = getGreeting('World');
console.log('message:', message);
// Присвоїв значення змінним
// Замінив console.log() у функції на return, щоб функція повертала рядок, а не undefined


// Завдання 5

const firstUser = {
    name: "Anna",
    contact: {
        email: "anna@example.com"
    }
};

const secondUser = {
    name: "Bob"
};
// Безпечний доступ через ?.
console.log(firstUser.contact?.email);
console.log(secondUser.contact?.email);