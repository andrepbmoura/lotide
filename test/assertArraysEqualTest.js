const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 9, 2], [1, 4, 8]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', 10]);
