const findKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key] === value);
};

module.exports = findKeyByValue;

