const member1 = {
    id: Symbol('member'),
    name: 'Frodo',
    joinDate: '2001-12-10'
};

const member2 = {
    id: Symbol('member'),
    name: 'Gandalf',
    joinDate: '2001-08-11',
};

const member3 = {
    id: Symbol('member'),
    name: 'Aragorn',
    joinDate: '2001-09-12'
};

console.log(member1);
console.log(member2);
console.log(member3);

//------------------------------------//

const twin1 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

const twin2 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

console.log(twin1 === twin2);
console.log(twin1.id === twin2.id);
console.log(twin1.name === twin2.name);
console.log(twin1.id.description === twin2.id.description);

// Ім'я, дата та опис Symbol однакові,але кожен виклик Symbol() створює нове унікальне значення
// Symbol з однаковим описом не рівні між собою

const s1 = Symbol('secret');
const s2 = Symbol(s1.description);
console.log(s1 === s2);  // Кожен виклик створює новий унікальний Symbol
// Опис однаковий, але Symbol різні

const s3 = Symbol('id');
const s4 = Symbol('id');
console.log(s3 == s4); // Symbol залишаються різними

//-------------------------------------------------------//

const s5 = Symbol("id");
//alert(s5); //викликає помилку TypeError
//alert(String(s5));  // String() і toString() працюють
//alert(s5.toString());
//alert(s5.description);  //повертає лише опис Symbol



const uniqueKey = Symbol('meta');
const data = {
  publicName: 'Alice',
  [uniqueKey]: 'секретна інформація'
};

console.log(data);
console.log(data[uniqueKey]);
console.log(data.uniqueKey);   
console.log(Object.keys(data));

// Symbol-ключі не потрапляють у Object.keys(),тому що Object.keys() повертає лише звичайні рядкові ключі
// Це корисно для зберігання службових або прихованих даних

// Завдання 5

const member4 = {
  id: Symbol('member'),
  name: 'Legolas',
  joinDate: '2001-10-12'
};

const member5 = {
  id: Symbol('member'),
  name: 'Gimli',
  joinDate: '2001-11-12'
};

const club = [
  member1,
  member2,
  member3,
  member4,
  member5,
];

function findMember(memberSymbol) {
  for (const member of club) {
    if (member.id === memberSymbol) {
      return member;
    }
  }

  return 'Member not found';
};

console.log(findMember(member4.id));
console.log(findMember(Symbol('member')));

// Завдання 6

const a = Symbol('shared');
const b = Symbol('shared');
console.log(a === b);   

const c = Symbol.for('shared');
const d = Symbol.for('shared');
console.log(c === d);   

// Я очікував, що c === d буде true,
// тому що Symbol.for() використовує глобальний реєстр символів
// Якщо ключ однаковий, JavaScript повертає той самий Symbol

// JavaScript має дві можливості
// Symbol() створює новий унікальний Symbol кожного разу
// Symbol.for() повертає один і той самий Symbol для однакового ключа

// Symbol.for() зручно використовувати,коли різні частини програми повинні працювати
// з одним і тим самим Symbol
// Наприклад, у великому застосунку модуль авторизації та модуль профілю
// можуть використовувати Symbol.for("user"),щоб отримувати один і той самий Symbol