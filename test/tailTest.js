// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// //pasted the test code from tail.js
// const array = tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]);
// assertEqual(array.length, 3);
// assertEqual(array[0], "Lighthouse");
// assertEqual(array[1], "Labs");

const assert = require('chai').assert
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
 });