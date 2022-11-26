const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "t", "m", "t" ]);
