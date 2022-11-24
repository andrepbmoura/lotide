const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) !== JSON.stringify(array2)) {
    return false;
  } else {
    for (const i of array1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅ Test Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Test Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let mid = 0;
  for (let i = 0; i < array.length; i++) {
    mid = array[0] + (array.slice(-1) - array[0]) / 2;
  }
  return Math.floor(mid);
};

console.log(middle([1, 2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), true));



