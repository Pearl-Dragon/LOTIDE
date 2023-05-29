const assertEqual = require('../assertEqual');
const head = require('../head');

const words = ["L", "Lighthouse", "Labs"];
assertEqual(words.length[3]);
assertEqual(words.length, 3);

// Test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");