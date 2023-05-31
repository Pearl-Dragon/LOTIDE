const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];

assertArraysEqual(middle(arr1), [3]);
assertArraysEqual(middle(arr2), [3, 4]);
