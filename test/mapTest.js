const assert = require('chai').assert;
const lotide = require('../index');

describe('#Map', () => {
  it('should return a new array of elements based on the callback', () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const results1 = lotide.map(words, (word) => word[0]);

    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
});
