function describe(value){
    return `Тип: ${typeof value}, Значення: ${value}`;
};

//--------------------------------------------------

function describe(value) {

    if (value === null) {
        return "Тип: null, Значення: null";
    }

    if (Array.isArray(value)) {
        return `Тип: array, Значення: ${value}`;
    }

    if (Number.isNaN(value)) {
        return "Тип: NaN, Значення: NaN";
    }

    return `Тип: ${typeof value}, Значення: ${value}`;
};

//--------------------------------------------------

function describe(value) {

    if (value === null) {
        return "Тип: null, Значення: null";
    }

    if (Array.isArray(value)) {
        return `Тип: array, Значення: ${value}, Кількість елементів: ${value.length}`;
    }

    if (Number.isNaN(value)) {
        return "Тип: NaN, Значення: NaN";
    }

    if (typeof value === "string") {
        return `Тип: string, Значення: ${value}, Довжина: ${value.length}`;
    }

    if (typeof value === "object") {
        return `Тип: object, Значення: ${JSON.stringify(value)}, Ключі: ${Object.keys(value).join(", ")}`;
    }

    if (typeof value === "function") {
        return `Тип: function, Значення: <function>, Аргументів: ${value.length}`;
    }

    if (typeof value === "bigint") {
    return `Тип: bigint, Значення: ${value}n`;
    }

    if (typeof value === "symbol") {
    return `Тип: symbol, Значення: ${value.description || "без опису"}`;
    }

    return `Тип: ${typeof value}, Значення: ${value}`;
}

//--------------------------------------------------------------

// Завдання 7

function describeRecursive(value) {

    if (typeof value === "object" && value !== null) {

        console.log("Тип: object");

        for (const key in value) {
            console.log(`${key}:`, describe(value[key]));
        }

        // Далі хотів викликати describeRecursive() для вкладених об'єктів і масивів, 
        // але поки не зрозумів,як зробити це правильно
        return;
    }

    console.log(describe(value));
}

describeRecursive({
    name: "Anna",
    hobbies: ["sewing", "F1"],
    age: 25
});

// Зрозумів, як пройтися по властивостях об'єкта за допомогою for..in
// і вивести опис кожного значення через describe()
// Але поки не зміг зробити справжню рекурсію,
// щоб функція сама викликала себе для вкладених об'єктів і масивів будь-якої глибини
