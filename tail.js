//const assertEqual = require('./assertEqual'); this is not nedded here only in the test file
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;


//not sure why this was here it doesn't work in this file? it doesn't work in tailTest.js either
// ["Lighthouse", "Labs", "Bootcamp"]);
// assertEqual(tail([3, 1, 2]), [1, 2]);
// assertEqual(tail(["apple", 1, 8]), [1, 8]);
