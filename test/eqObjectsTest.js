const assert = require('chai').assert;
const lotide = require('../index');

describe('#eqObjects', () => {
  const ab = { a: '1', b: '2' };
  const ba = { b: '2', a: '1' };
  const abc = { a: '1', b: '2', c: '3' };
  const cd = { c: '1', d: ['2', 3] };
  const dc = { d: ['2', 3], c: '1' };
  const cd2 = { c: '1', d: ['2', 3, 4] };

  it('should return true if objects are equal', () => {
    assert.deepEqual(lotide.eqObjects(ab, ba), true);
    assert.deepEqual(lotide.eqObjects(cd, dc), true);
  });
  it('should return false if objects are not equal', () => {
    assert.deepEqual(lotide.eqObjects(ab, abc), false);
    assert.deepEqual(lotide.eqObjects(cd, cd2), false);
  });
});
