"use strict";

const dollarPrice = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const hryvnia = dollars * dollarPrice;

    console.log(`${dollars} USD = ${hryvnia} грн`);
}