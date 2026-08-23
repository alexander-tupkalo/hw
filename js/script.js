'use stickt'

const removeElement = (array, item) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            result.push(array[i]);
        }
    }

    return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
const updatedNumbers = removeElement(numbers, 5);

console.log(updatedNumbers);

//----------------------------------------

const removeElementSplice = (array, item) => {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
};

const numbersArray = [1, 2, 3, 4, 5, 6, 7];
removeElementSplice(numbersArray, 5);

console.log(numbersArray);