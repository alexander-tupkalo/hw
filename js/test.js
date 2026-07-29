console.log(describe(42));
console.log(describe("hello"));
console.log(describe(true));
console.log(describe(undefined));

//

console.log(describe(null));
console.log(describe([1, 2, 3]));
console.log(describe(NaN));
console.log(describe({ a: 1 }));

//

console.log(describe("hello"));
console.log(describe([1, 2, 3]));
console.log(describe({
    name: "Anna",
    age: 25
}));

console.log(describe(function (a, b, c) {
    return a + b + c;
}));

//

console.log(describe(100n));
console.log(describe(Symbol("user-id")));
console.log(describe(Symbol()));

//

const testValues = [
    42,
    0.1 + 0.2,
    100n,
    "hello",
    "",
    true,
    false,
    null,
    undefined,
    NaN,
    Infinity,
    [1, 2, 3],
    [],
    {
        name: "Anna",
        age: 25
    },
    {},
    Symbol("id"),

    function greet(name) {
        return `Hi, ${name}`;
    },

    () => "arrow",

    -100,
    3.14,
    "JavaScript"
];

for (let i = 0; i < testValues.length; i++) {
  console.log(describe(testValues[i]));
};

// Завдання 7

const barMenu = {
    strongAlcohol: {
        cognac: ["VS", "VSOP"],
        rum: ["White", "8 Years Old"],
        tequila: ["Silver", "Reposado"]
    },

    wine: {
        red: ["Cabernet", "Malbec"],
        white: ["Sauvignon Blanc", "Pinot Grigio"]
    },

    cocktails: [
        "Negroni",
        "Margarita",
        "Old Fashioned"
    ]
};

console.log(describe(barMenu));