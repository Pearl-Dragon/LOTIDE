const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("Hello", "Hello");
//assertEqual("hello", "world");
//assertEqual(42, 42);

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);