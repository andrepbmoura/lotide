const assert = require('chai').assert;
const lotide = require('../index');


describe("should return the 'tail' of an array", () => {
  it("returns the length of the array without the first element", () => {
    const result = lotide.tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });
  it("returns 'Lighthouse'", () => {
    const result = lotide.tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], "Lighthouse");
  });
  it("returns 'Labs'", () => {
    const result = lotide.tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[1], "Labs");
  });
});