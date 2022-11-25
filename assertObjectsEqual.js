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

const eqObjects = (object1, object2) => {
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;
  if (obj1Length === obj2Length) {
    for (const item in object1) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    }
    return true;
  }
  return false;
};


const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);