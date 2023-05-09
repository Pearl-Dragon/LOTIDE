const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(array) {
  return array [0];
};
// eslint-disable-next-line no-undef
assertEqual(head(["Hello", "Lighthouse", "Labs", "Bootcamp"]), "Hello");
// eslint-disable-next-line no-undef
assertEqual(head([3,1,2]), 3);