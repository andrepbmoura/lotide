const assert = require('chai').assert;
const lotide = require('../index');

describe('#letterPositions', () => {
  it('should return the letter positions of a string', () => {
    assert.deepEqual(lotide.letterPositions("hello").e, [1]);
  })
});