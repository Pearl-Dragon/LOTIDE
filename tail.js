const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
// const head = function(array) {
  // return array [0];
// };
//assertEqual(tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]), "Hello");
// assertEqual(tail([3,1,2]), 3);
// assertEqual(tail(["apple", 1, 8]), 1);
const array = tail(["Hello", "Lighthouse", "Labs", "Bootcamp"]);
assertEqual(array.length, 3);
assertEqual(array[0], "Lighthouse");
assertEqual(array[1], "Labs");




// ["Lighthouse", "Labs", "Bootcamp"]);
//assertEqual(tail([3, 1, 2]), [1, 2]);
// assertEqual(tail(["apple", 1, 8]), [1, 8]);
