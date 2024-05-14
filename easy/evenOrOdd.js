// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = (num) => {
  return num % 2 === 0 ? "Even" : "Odd";
};

console.log(evenOrOdd(0)); // 'Even'
console.log(evenOrOdd(2)); // 'Even'
console.log(evenOrOdd(3)); // 'Odd'
console.log(evenOrOdd(-3)); // 'Odd'
