const lotide = require('../index');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

lotide.assertEqual(lotide.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
lotide.assertEqual(lotide.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);