// Get the Middle Character
// Given a word, your job is to return the middle character(s) of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = (str) => {
  const len = str.length;
  const mid = len / 2;

  return len % 2 ? str[Math.floor(mid)] : str[mid - 1] + str[mid];
};

console.log(getMiddle("test")); // 'es'
console.log(getMiddle("testing")); // 't'
console.log(getMiddle("middle")); // 'dd'
console.log(getMiddle("A")); // 'A'
