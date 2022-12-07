const lotide = require('../index');

lotide.assertArraysEqual([1, 2, 3], [1, 2, 3]);
lotide.assertArraysEqual([1, 9, 2], [1, 4, 8]);
lotide.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
lotide.assertArraysEqual(["1", "2", "3"], ["1", "2", 10]);