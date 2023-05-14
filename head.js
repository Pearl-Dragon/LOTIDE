const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};
//const head = function(array) {
  return array [0];
//};

//ssertEqual(head(["apple", 1, 8]), 1);

const words = ["L", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length[3]);


