'use strict'

const form = document.querySelector('#registrationForm');
const clearButton = document.querySelector('#clearButton');
const result = document.querySelector('#result');

const email = form.querySelector('[name="email"]');
const emailError = email.nextElementSibling;

const password = form.querySelector('[name="password"]');
const passwordError = password.nextElementSibling;

const confirmPassword = form.querySelector('[name="confirmPassword"]');
const confirmPasswordError = confirmPassword.nextElementSibling;

const age = form.querySelector('[name="age"]');
const ageError = age.nextElementSibling;

const city = form.querySelector('[name="city"]');
const cityError = city.parentElement.querySelector('.error');
const customCity = form.querySelector('[name="customCity"]');

const checkbox = form.querySelector('[name="checkbox"]');
const checkboxError = checkbox.parentElement.querySelector('.error');

//
function validEmail() {
    if (!email.value) {
        emailError.textContent = 'Email обов’язковий';
        return false;
    }

    if (!email.value.includes('@')) {
        emailError.textContent = 'Enter a valid email';
        return false;
    }

    emailError.textContent = '';
    return true;
}

email.addEventListener('input', validEmail);

//
function validPassword() {
    if (!password.value) {
        passwordError.textContent = 'Пароль обов’язковий';
        return false;
    }

    if (password.value.length < 8) {
        passwordError.textContent = 'Мінімум 8 символів';
        return false;
    }

    if (!/[A-Za-z]/.test(password.value)) {
        passwordError.textContent = 'Додайте хоча б одну літеру';
        return false;
    }

    if (!/\d/.test(password.value)) {
        passwordError.textContent = 'Додайте хоча б одну цифру';
        return false;
    }

    passwordError.textContent = '';
    return true;
}

password.addEventListener('input', validPassword);

//
function validConfirmPassword() {
    if (!confirmPassword.value) {
        confirmPasswordError.textContent = 'Підтвердіть пароль';
        return false;
    }

    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Паролі не збігаються';
        return false;
    }

    confirmPasswordError.textContent = '';
    return true;
}

confirmPassword.addEventListener('input', validConfirmPassword);
password.addEventListener('input', validConfirmPassword);

//
function validAge () {
    if(!age.value) {
        ageError.textContent = 'Вкажіть свій вік';
        return false;
    }

    if (age.value < 16 || age.value > 120) {
        ageError.textContent = 'Вік: обов’язковий, 16–120';
        return false;
    }

    ageError.textContent = '';
    return true;
}

age.addEventListener('input', validAge);

//
function validCity () {
    if (!city.value) {
        cityError.textContent = 'Місто: обов’язкове';
        return false;
    }

    if (city.value === 'other' && !customCity.value.trim()) {
        cityError.textContent = 'Введіть назву свого міста';
        return false;
    }

    cityError.textContent = '';
    return true;
}

city.addEventListener('change', function () {
    if (city.value === 'other') {
        customCity.hidden = false;
    } else {
        customCity.hidden = true;
        customCity.value = '';
    }

    validCity();
});

customCity.addEventListener('input', validCity);

//
function validCheckbox() {
    if (!checkbox.checked) {
        checkboxError.textContent = 'Потрібно погодитися';
        return false;
    }

    checkboxError.textContent = '';
    return true;
}

checkbox.addEventListener('change', validCheckbox);

//=====================================================

const validators = [
    {field: email, validate: validEmail},
    {field: password, validate: validPassword},
    {field: confirmPassword, validate: validConfirmPassword},
    {field: age, validate: validAge},
    {field: city, validate: validCity},
    {field: checkbox, validate: validCheckbox}
];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const validationResult = validators.map(function (item) {
        return item.validate();
    });

    const firstInvalidIndex = validationResult.findIndex(function (isValid) {
        return !isValid;
    });

    if (firstInvalidIndex !== -1) {
        validators[firstInvalidIndex].field.focus();
        return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.age = Number(data.age);
    data.checkbox = checkbox.checked;

    if (city.value === 'other') {
        data.city = customCity.value.trim();
    } else {
        data.city = city.options[city.selectedIndex].textContent;
    }

    delete data.customCity;

    result.textContent = JSON.stringify(data, null, 2);
});

//====================================================

clearButton.addEventListener('click', function (){
    form.reset();

    localStorage.removeItem('registrationForm');

    const errors = form.querySelectorAll('.error');

    errors.forEach(function (error) {
        error.textContent = '';
    });
    customCity.hidden = true;
    result.textContent = '';
});