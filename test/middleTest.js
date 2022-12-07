const assert = require('chai').assert;
const lotide = require('../index');


describe("should return the middle of an array", () => {
  it("returns '2, 3' for '1, 2, 3, 4'", () => {
    assert.deepEqual(lotide.middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns '3, 4' for '1, 2, 3, 4, 5, 6'", () => {
    assert.deepEqual(lotide.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});