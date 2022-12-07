const lotide = require('../index');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = lotide.takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = lotide.takeUntil(data2, x => x === ',');

lotide.assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
lotide.assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);