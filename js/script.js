'use strict'

const input = document.querySelector("#input");
const addButton = document.querySelector("#addButton");
const list = document.querySelector(".list");

addButton.addEventListener('click', function () {
    const text = input.value.trim();

    if (!text) {
        return;
    }

    const li = document.createElement("li");
    const button = document.createElement("button");

    li.textContent = text
    button.textContent = '✖';
    button.classList.add("delete__btn");

    li.append(button);
    list.append(li);
    input.value = '';
});

list.addEventListener('click', function (event) {
    if (event.target.classList.contains("delete__btn")) {
        event.target.parentElement.remove();
        return;
    }

    if (event.target.tagName === 'LI') {
        event.target.classList.toggle("selected");
    }
});