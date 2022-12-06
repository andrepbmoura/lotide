const assert = require('chai').assert
const middle = require('../middle')


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); => returns 2, 3
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

describe("should return the middle of an array", () => {
  it("returns '2, 3' for '1, 2, 3, 4'", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns '3, 4' for '1, 2, 3, 4, 5, 6'", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});