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

module.exports = eqArrays;