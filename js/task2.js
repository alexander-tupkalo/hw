"use strict";

const inputTemperature = prompt("Введіть температуру в °C:");
const inputScale = prompt("В яку шкалу перевести? (F, K або R)");

if (inputScale === null) {
    alert("Ввід скасовано");
} else {

    const temperature = Number(inputTemperature);
    const scale = inputScale.toLowerCase();

    // Рівень 2
    const scaleNames = {
        f: "Фаренгейт",
        k: "Кельвін",
        r: "Ранкін"
    };

    const isValidTemperature =
        !Number.isNaN(temperature) &&
        Number.isFinite(temperature);

    // Рівень 1
    // const isValidScale =
    //     scale === "f" ||
    //     scale === "k" ||
    //     scale === "r";

    // Рівень 2
    const hasScale = Object.hasOwn(scaleNames, scale);

    if (!isValidTemperature) {
        alert("Некоректна температура");

    // Рівень 1
    // } else if (!isValidScale) {
    //     alert("Невідома шкала");

    // Рівень 2
    } else if (!hasScale) {
        alert("Невідома шкала");
    } else if (temperature < -273.15) {
        alert("Нижче абсолютного нуля");
    } else { 
        
        let result;

        switch (scale) {

            case "f":
                result = temperature * 9 / 5 + 32; // Цельсій > Фаренгейт
                break;
            case "k":
                result = temperature + 273.15; // Цельсій > Кельвін
                break;
            case "r":
                result = (temperature + 273.15) * 9 / 5; // Цельсій > Ранкін
                break;
        }
        result = Math.round(result * 100) / 100;

        const scaleName = scaleNames[scale] ?? "Невідома шкала";
        // Рівень 3
        const weather =
            temperature < -10
                ? "мороз"
                : temperature <= 0
                    ? "холодно"
                    : temperature <= 15
                        ? "прохолодно"
                        : temperature <= 25
                            ? "комфортно"
                            : "спека";

        // Рівень 1
        // alert(result);

        // Рівень 2
        // alert(`${temperature} °C = ${result} (${scaleName})`);

        // Рівень 3
        alert(`${temperature} °C = ${result} (${scaleName}) — ${weather}`);
    }

    console.log(temperature);
    console.log(scale);
}