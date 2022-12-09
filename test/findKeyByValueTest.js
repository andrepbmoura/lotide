const assert = require('chai').assert;
const lotide = require('../index');

describe('#findKeyByValue', () => {
    const bestTVShowsByGenre = {
      sci_fi: 'The Expanse',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'The Wire',
    };
  it('should find a key by value', () => {
    assert.deepEqual(lotide.findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it('should return undefined if no key is found', () => {
    assert.deepEqual(lotide.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});
