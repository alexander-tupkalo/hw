const hero = {
    name: "Frodo",
    class: "rogue",
    level: 10,
    isAlive: true,

    stats: {
        hp: 100,
        mana: 10,
        strength: 10,
        agility: 12,
        intelligence: 9
    },

    inventory: [
        "sword",
        "ring",
        "shield",
        "potion",
        "helmet",
    ],

    abilities: {
        attack: function () {
            return `${hero.name} атакує!`;
        },

        heal: () => {
            return `${hero.name} використовує лікування!`;
        },

        levelUp: () => {
            return `${hero.name} підвищив рівень!`;
        }
    },

    location: {
        region: "Gondor",
        city: "Minas Tirit",
        coordinates: {
            x: 120,
            y: 75,
            z: 15
        }
    }
};

const enemy = {
    name: "Gollum",
     "critical hit chance": 0.15,
     "attack-speed": 2.5,
     ["damage-" + hero.class]: 50
};

const villain = {
    name: "Sauron",
    class: "mage",
    level: 12,
    isAlive: true,

    stats: {
        hp: 120,
        mana: 150,
        strength: 100,
        agility: 50,
        intelligence: 25
    },

    inventory: [
        "staff",
        "cloak",
        "potion"
    ]
};


console.log(hero);
console.log(hero.name);
console.log(hero.class);
console.log(hero.level);
console.log(hero.isAlive);

// Завдання 3

console.log(hero.stats);
console.log(hero.stats.strength);
console.log(hero.stats.intelligence * 2);

// Завдання 4

console.log(hero.inventory);
console.log(hero.inventory[0]);
console.log(hero.inventory[hero.inventory.length - 1]);
console.log(hero.inventory.length);

// Завдання 5

console.log(enemy.name);
console.log(enemy["critical hit chance"]);
console.log(enemy["attack-speed"]);
console.log(enemy["damage-" + hero.class]);

// Через крапку отримати ці властивості не можна:
// enemy.critical hit chance помилка,тому що в назві є пробіл

// enemy.attack-speed
// JavaScript сприйме дефіс як оператор віднімання,тому потрібно використовувати квадратні дужки

// Завдання 6

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

// Завдання 7

console.log(hero.location.region);
console.log(hero.location.coordinates.z);

// Завдання 8

console.log(hero.name);
console.log(villain.name);

// Порівняння HP
if (hero.stats.hp > villain.stats.hp) {
    console.log(hero.name + " має більше HP");
} else {
    console.log(villain.name + " має більше HP");
}

// Учасники дуелі
console.log(
    `Учасники дуелі: ${hero.name} (${hero.inventory.join(", ")}) vs ${villain.name} (${villain.inventory.join(", ")})`
);