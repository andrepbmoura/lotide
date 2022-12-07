const countLetters = function(string) {
  let result = {};
  for (const word of string) {
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result;
};

module.exports = countLetters;



