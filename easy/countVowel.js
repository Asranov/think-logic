// Vowel Count
// Return the number (count) of vowels (a, e, i, o, u) in the given string.
// The input string will only consist of lower case letters and/or spaces.

const countVowel = (str) => {
  const vowel = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }

  return count;
};

console.log(countVowel("my pyx")); // 0
console.log(countVowel("pear tree")); // 4
console.log(countVowel("abracadabra")); // 5
console.log(countVowel("o a kak ushakov lil vo kashu kakao")); // 13
