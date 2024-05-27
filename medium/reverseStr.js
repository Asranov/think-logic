// Write a function that reverses the string that is passed to it. For this challenge, you may NOT use the JavaScript built-in reverse() method.

const reverseString = (str) => {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }

  return revStr;
};

console.log(reverseString("hello")); // 'olleh'
console.log(reverseString("world")); // 'dlrow'
console.log(reverseString("")); // ''
console.log(reverseString("h")); // 'h'
