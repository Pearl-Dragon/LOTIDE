const assertEqual = require('./assertEqual');
 
const head = function(array) {
   return array [0];// Fn to retrieve the head of an array
};

assertEqual(head(["apple", 1, 8]), 1);

const words = ["L", "Lighthouse", "Labs"];
// tail(words)

module.exports = head;