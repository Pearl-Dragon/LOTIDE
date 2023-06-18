const eqArrays = require('./eqArrays');

// Fn is used to assert and compare two arrays for equality.
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`👍 Assertion Passed: [${actual}] === [${expected}]`);  //If the arrays are equal, a success message is printed to the console. Otherwise, a failure message is printed.
  } else {
    console.log(`🆘 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;




/* Notes below for personal reference:

The provided function is named assertArraysEqual, and it takes two parameters: actual and expected. Here's what the function does:

It calls another function named eqArrays with the actual and expected arrays as arguments to determine if they are equal. The result of this comparison is stored in the isEqual variable.
If isEqual is true, it means the actual and expected arrays are equal.
In that case, the function logs a message to the console indicating that the assertion has passed, using template literals to display the actual and expected arrays.
If isEqual is false, it means the actual and expected arrays are not equal.
In that case, the function logs a message to the console indicating that the assertion has failed, again using template literals to display the actual and expected arrays.

It can be helpful in testing scenarios where you want to check if the actual output matches the expected output. I*/