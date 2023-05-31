const assertEqual = require('../assertEqual');
const tail = require('../tail');
//pasted the test code from tail.js
const array = tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]);
assertEqual(array.length, 3);
assertEqual(array[0], "Lighthouse");
assertEqual(array[1], "Labs");

