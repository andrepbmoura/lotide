const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;






