
'use strict';

const form = document.querySelector('[data-form]');
const formValues = document.querySelector('[data-form-values]');

function renderUsers(users) {
    formValues.replaceChildren();

    users.forEach((user) => {
        const card = document.createElement('div');
        card.className = 'card mb-3';

        const list = document.createElement('ul');
        list.className = 'list-group list-group-flush';

        const emailItem = document.createElement('li');
        emailItem.className = 'list-group-item';
        emailItem.textContent = `EMAIL: ${user.email}`;

        const ageItem = document.createElement('li');
        ageItem.className = 'list-group-item';
        ageItem.textContent = `AGE: ${user.age}`;

        const messageItem = document.createElement('li');
        messageItem.className = 'list-group-item';
        messageItem.textContent = `MESSAGE: ${user.message}`;

        list.append(emailItem, ageItem, messageItem);
        card.append(list);
        formValues.append(card);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        email: form.elements.email.value,
        age: form.elements.age.value,
        message: form.elements.message.value
    };

    const savedData = JSON.parse(localStorage.getItem('user'));

    let users = [];

    if (Array.isArray(savedData)) {
        users = savedData;
    } else if (savedData) {
        users = [savedData];
    }

    users.push(user);

    const json = JSON.stringify(users);
    localStorage.setItem('user', json);

    renderUsers(users);
});

const savedData = JSON.parse(localStorage.getItem('user'));

let users = [];

if (Array.isArray(savedData)) {
    users = savedData;
} else if (savedData) {
    users = [savedData];
}

renderUsers(users);
