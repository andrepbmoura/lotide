const assert = require('chai').assert;
const lotide = require('../index');

describe('#findKey', () => {
  it('should find a key based on the callback criteria', () => {
    lotide.findKey({
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    }, (x) => x.stars === 2);

    assert.deepEqual(lotide.findKey({
      'Blue Hill': { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    }, (x) => x.stars === 5), undefined);
  });
});
