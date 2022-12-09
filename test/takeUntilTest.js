const assert = require('chai').assert;
const lotide = require('../index');

describe('#takeUntil', () => {
  it('should return a slice of an array based on the callback', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = lotide.takeUntil(data1, (x) => x < 0);

    const data2 = ["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'];
    const results2 = lotide.takeUntil(data2, (x) => x === ',');

    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
    assert.deepEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
  });
});
