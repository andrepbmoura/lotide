const { assert } = require('chai');
const lotide = require('../index');

describe('#flatten', () => {
  it('should return a single line array', () => {
    assert.deepEqual(lotide.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
