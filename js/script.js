'use stickt'

const padString = (str, targetLength, symbol, isLeft = false) => {
    // Перевiрка аргументiв
    if (typeof str !== "string") {
        return "Error: str must be a string";
    }

    if (typeof targetLength !== "number") {
        return "Error: targetLength must be a number"
    }

    if (typeof symbol !== "string" || symbol.length !== 1) {
        return "Error: symbol must be 1 character"
    }

    if (typeof isLeft !== "boolean") {
        return "Error: isLeft must be true or false"
    }
    // Якщо рядок вже довший обрiзаємо його
    if (str.length >= targetLength) {
        return str.substring(0, targetLength)
    }

    //Рахуємо скiльки треба додати
    let symbolsNeed = targetLength - str.length;
    let padding = "";
    
    for (let i =0; i < symbolsNeed; i++) {
        padding += symbol;
    }
    //Вибираємо сторону
    if (isLeft === true) {
        return padding +str;    
    } else {
        return str + padding
    }
};

console.log(padString("hello", 8, "*"));
console.log(padString("hello", 6, "*", true));
console.log(padString("hello", 2, "*"));