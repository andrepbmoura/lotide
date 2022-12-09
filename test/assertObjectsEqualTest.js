const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe('#assertObjectsEqual', () => {
  const ab = { a: '1', b: '2' };
  const ba = { b: '2', a: '1' };
  const abc = { a: '1', b: '2', c: '3' };

  it('should return true if the objects are equal', () => {
    assert.deepEqual(assertObjectsEqual(ab, ba));
  });
  it('should return false if the objects are not equal', () => {
    assert.deepEqual(assertObjectsEqual(ab, abc));
  });
});
