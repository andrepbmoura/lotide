const without = function(array1, array2) {
  let newarray = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      newarray.push(item);
    }
  }
  return newarray;
};

module.exports = without;

