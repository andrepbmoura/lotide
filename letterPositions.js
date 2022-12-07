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

module.exports = letterPositions;

