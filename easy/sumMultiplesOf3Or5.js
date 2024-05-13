// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0.

const sumMultiplesOf3Or5 = (number) => {
  if (number < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumMultiplesOf3Or5(0)); // 0
console.log(sumMultiplesOf3Or5(-15)); // 0
console.log(sumMultiplesOf3Or5(10)); // 23
console.log(sumMultiplesOf3Or5(20)); // 78
console.log(sumMultiplesOf3Or5(200)); // 9168
