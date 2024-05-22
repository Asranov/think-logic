// Highest and Lowest
// Given a string of space-separated numbers, write a function that returns the highest and lowest numbers. There will always be at least one number in the input string.

const highAndLow = numbers => {
    const numbersArr = numbers.split(' ');
    return `${Math.max(...numbersArr)} ${Math.min(...numbersArr)}`
};

console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
console.log(highAndLow('0 -214 542')); // '542 -214'