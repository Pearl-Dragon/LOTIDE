const assertArraysEqual = require("../assertArraysEqual");
//assertEqual = require('../assertEqual');       //wasn't necessary to add this because 'require' is already getting it from assertArraysEqual

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
