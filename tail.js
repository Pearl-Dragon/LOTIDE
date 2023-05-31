const assertEqual = require('./assertEqual');
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;



// ["Lighthouse", "Labs", "Bootcamp"]);
//assertEqual(tail([3, 1, 2]), [1, 2]);
// assertEqual(tail(["apple", 1, 8]), [1, 8]);
