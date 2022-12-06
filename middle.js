const middle = function(array) {
  let mid = [];
  let midArray = array.length / 2;
  if (array.length % 2 === 0) {
    mid.push(array[midArray - 1], array[midArray]);
  } else if (array.length === 1 || array.length === 2) {
    return array;
  } else {
    mid.push(array[Math.floor(midArray)]);
  }
  return mid;
};

module.exports = middle;




