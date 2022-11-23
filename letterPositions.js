const assertArraysEqual = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    console.log(`✅ Test Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ Test Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};

const letterPositions = (sentence) => {
  const stringArr = sentence.split('');
  let results = {};
  for (const index of stringArr.keys()) {
    const character = stringArr[index];
    if (results[character]) {
      results[character].push(index);
    } else {
      results[character] = [index];
    }
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(eqArrays(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
