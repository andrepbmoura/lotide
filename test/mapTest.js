const lotide = require('../index');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = lotide.map(words, word => word[0]);

lotide.assertArraysEqual(results1, ["g", "c", "t", "m", "t" ]);