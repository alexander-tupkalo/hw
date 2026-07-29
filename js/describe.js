function describe(value) {

    if (value === null) {
        return "Тип: null, Значення: null";
    }

    if (Array.isArray(value)) {

        let result = "Тип: array\n";

        for (let i = 0; i < value.length; i++) {
            result += " " + describe(value[i]) + "\n";
        }

        return result;
    }

    if (Number.isNaN(value)) {
        return "Тип: NaN, Значення: NaN";
    }

    if (typeof value === "string") {
        return `Тип: string, Значення: ${value}, Довжина: ${value.length}`;
    }

    if (typeof value === "object") {

        let result = "Тип: object\n";

        for (const key in value) {
            result += `${key}: ${describe(value[key])}\n`;
        }

        return result;
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