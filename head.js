const assertEqual = require('./assertEqual');
 
const head = function(array) {
   return array [0];// Fn to retrieve the head of an array
};

assertEqual(head(["apple", 1, 8]), 1);

const words = ["L", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length[3]);
// assertEqual(words.length, 3);

// // Test cases
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


module.exports = head;