const lotide = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

lotide.assertObjectsEqual(ab, ba);
lotide.assertObjectsEqual(ab, abc);


