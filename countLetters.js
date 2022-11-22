const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (const word of string) {
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result;
};

console.log(countLetters("LHL")); //=> L: 2 H:1


