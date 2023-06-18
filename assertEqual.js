// Fn  is used to assert and compare two values for equality

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);  //If the values are equal, a success message is printed to the console. Otherwise, a failure message is printed.
  } else {
    console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;




/*Notes below for personal use:

 It compares the actual value with the expected value using the strict equality operator (===).
If the actual and expected values are strictly equal, the condition actual === expected evaluates to true.
In that case, the function logs a success message to the console using template literals to display the actual and expected values, indicating that the assertion has passed.
If the actual and expected values are not strictly equal, the condition actual === expected evaluates to false.
In that case, the function logs a failure message to the console using template literals to display the actual and expected values, indicating that the assertion has failed.
The assertEqual function is used to assert and compare two values for equality. ***It is commonly used in testing scenarios to check if the actual value matches the expected value.
*/