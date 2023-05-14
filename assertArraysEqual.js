const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !==arr2.length) {
    return false;
  }
for(let i = 0; i< arr1.length;i++) {
  if (arr1[i] !== arr2[i]) {
    return false;

  }
}
return true;
};
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🆘 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("Hello", "Hello");
//assertEqual("hello", "world");
//assertEqual(42, 42);

//eqArrays([1, 2, 3], [1, 2, 3]);
//eqArrays([1, 2, 3], [3, 2, 1]);

//eqArrays(["1", "2", "3"], ["1", "2", "3"]);
//eqArrays(["1", "2", "3"], ["1", "2", 3]);