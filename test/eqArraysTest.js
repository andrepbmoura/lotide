const assert = require('chai').assert;
const lotide = require('../index');

describe('#eqArrays', () => {
  it('should return true if the arrays are identical', () => {
    assert.equal(lotide.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  
  });
  it('should return false if the arrays are not identical', () => {
    assert.equal(lotide.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});