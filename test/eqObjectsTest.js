const lotide = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

lotide.assertEqual(lotide.eqObjects(ab, ba), true); 
lotide.assertEqual(lotide.eqObjects(ab, abc), false); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
lotide.assertEqual(lotide.eqObjects(cd, dc), true); 

const cd2 = { c: "1", d: ["2", 3, 4] };
lotide.assertEqual(lotide.eqObjects(cd, cd2), false); 