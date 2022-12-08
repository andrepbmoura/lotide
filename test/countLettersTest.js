const assert = require('chai').assert;
const lotide = require('../index');

describe('#countLetters', () => {
  it('returns a count of the letters of an object', () => {
    assert.deepEqual(lotide.countLetters("LHL"), {L: 2, H: 1});
  });
});


