// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5, 6];

// assertArraysEqual(middle(arr1), [3]);
// assertArraysEqual(middle(arr2), [3, 4]);


const assert = require('chai').assert
const middle = require('../middle');


describe("#middle", () => {
  it("returns middle two elements for even-length array", () => {
    const result = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(result, expected);
  });

  it("returns middle element for odd-length array", () => {
    const result = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(result, expected);
  });
});