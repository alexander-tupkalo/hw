'use stickt'

const menu = document.getElementById('menu');
const allLi = menu.getElementsByTagName('li');

const texts = [];

for (const li of allLi) {

  console.log("Елемент списку:", li)

  const cleanText =li.firstChild.textContent.trim();

  texts.push(cleanText);

}

console.log("------------------------------");

console.log("Кiлькiсть елементiв li:", allLi.length );

console.log("Масив iз текстом:", texts);