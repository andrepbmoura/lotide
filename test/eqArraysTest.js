const lotide = require('../index');

lotide.assertEqual(lotide.eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
lotide.assertEqual(lotide.eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
lotide.assertEqual(lotide.eqArrays([1, 2, 3], [1, 2, 3]), true);