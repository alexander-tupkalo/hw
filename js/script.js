"use strict"

function customShift(array) {
    if (array.length === 0) {
        return undefined;
    }


const firstElement = array[0];

for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
}

array.length = array.length - 1;

return firstElement;

}

const numbers = [10, 20, 30]
const remove = customShift(numbers);

console.log(remove);
console.log(numbers);

//=======================================

function customReverse(array) {
    const middle = Math.floor(array.length / 2);
    const lastIndex = array.length - 1;

    for (let i = 0; i < middle; i++) {
        const step = array[i];

        array[i] = array[lastIndex - i];
        array[lastIndex - i] = step;
    }

    return array;
}

const letters = ['a', 'b', 'c', 'd'];
customReverse(letters);

console.log(letters);