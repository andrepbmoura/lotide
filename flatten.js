const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅ Test Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Test Failed: ${array1} !== ${array2}`);
  }
};

const flatten = function(array) {
  return array.flat();
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]