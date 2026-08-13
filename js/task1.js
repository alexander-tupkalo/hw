'use stickt'

const randomNumber = Math.floor(Math.random() * 10) + 1;

let guessedCorrectly = false;
let attempts = 0;

do {
    const userInput = prompt("Вгадай число вiд 1 до 10:")
    
    if (userInput === null) {
        alert("Гру завершено");
        break;
    }
    
    if (userInput.trim() === "") {
        alert("Ви нiчого не ввели");
        continue;
    }

    const userGuess = Number(userInput);

    if (Number.isNaN(userGuess)) {
        alert("Це не число");
        continue;
    }

    if (!Number.isInteger(userGuess)) {
        alert("Введіть ціле число");
        continue;
    }

    if (userGuess < 1 || userGuess > 10){
        alert ("Число має бути від 1 до 10");
        attempts++;
        continue;
    }

    attempts++

    if (userGuess === randomNumber) {
        alert(`Вітаю! Ви вгадали число за ${attempts} спроб!`);
        guessedCorrectly = true;
    } else if (userGuess < randomNumber) {
        alert(`Замало.Залишилось спроб: ${5 - attempts}`);
    } else {
        alert(`Забагато.Залишилось спроб: ${5 - attempts}`)
    }

    if (!guessedCorrectly && attempts === 5) {
        alert(`На жаль, це було число ${randomNumber}`);
        break;
    }

} while (!guessedCorrectly);

// Варіант через Number():
// const userGuess = Number(userInput);
// const isValidNumber = !Number.isNaN(userGuess) && Number.isInteger(userGuess);