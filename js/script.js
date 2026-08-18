"use strict";

const generateKey = (length, characters) => {
    let result = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        const randomChar = characters[randomIndex];

        result += randomChar;
    }
    
    return result
};

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);

console.log(key);