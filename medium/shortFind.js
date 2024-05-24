// Given a non-empty string of words, return the length of the shortest word(s).

const findShort = (str) => {
  return Math.min(...str.split(" ").map((word) => word.length));
};

console.log(findShort("Test where final word shortest see")); // 3
console.log(findShort("Lets all go on holiday somewhere very cold")); // 2
console.log(findShort("i want to travel the world writing code one day")); // 1
