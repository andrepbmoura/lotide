const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

const without = function(array1, array2) {
  let newarray = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      newarray.push(item);
    }
  }
  return newarray;
};
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2,3]));
console.log(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));