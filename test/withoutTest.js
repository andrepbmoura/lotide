const assert = require('chai').assert;
const lotide = require('../index');

describe('#without', () => {
  it('should return the items from the first array that are not in the second array', () => {
    assert.deepEqual(lotide.without([1, 2, 3], [1]), [2,3]);
  })
});