// Clock
// The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// There are 1,000 milliseconds in a second.

const convertMilliseconds = (h, m, s) => {
  return h * 3600000 + m * 60000 + s * 1000;
};

console.log(convertMilliseconds(0, 0, 0)); // 0
console.log(convertMilliseconds(0, 1, 1)); // 61000
console.log(convertMilliseconds(1, 0, 0)); // 3600000
console.log(convertMilliseconds(1, 0, 1)); // 3601000
console.log(convertMilliseconds(1, 1, 1)); // 3661000
