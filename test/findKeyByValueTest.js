const assert = require('chai').assert;
const lotide = require('../index');

describe('#findKeyByValue', () => {
  it('should find a key by value', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

  assert.deepEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assert.deepEqual(lotide.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});