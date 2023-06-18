const {eqObjects} = require('./eqObjects');

// Fn used to assert and compare two objects for equality.
const assertObjectsEqual = function(actual, expected) {
  //const util = require("util");
  const inspect = require("util").inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`Objects are equal: ${inspect(actual)}`); // success message is printed to the console along with the formatted actual object.
  } else {
    console.log(`Objects are not equal: ${inspect(actual)}`);  //failure message is printed along with the formatted actual object.
  }
};
  


module.exports = assertObjectsEqual;




/* Notes below for personal reference:

The function assertObjectsEqual takes two parameters: actual and expected. Here's what the function does:

It uses the inspect function from the util module to convert the actual object into a formatted string representation. The inspect function is accessed through require("util").inspect.
The inspect function is used to provide a more readable representation of the object for logging purposes.
The function then calls another function named eqObjects with the actual and expected objects as arguments to determine if they are equal.
If eqObjects returns true, it means the actual and expected objects are equal.
In that case, the function logs a message to the console indicating that the objects are equal, along with the formatted actual object using inspect.
If eqObjects returns false, it means the actual and expected objects are not equal.
In that case, the function logs a message to the console indicating that the objects are not equal, along with the formatted actual object using inspect.
The assertObjectsEqual function is used to assert and compare two objects for equality. It relies on the eqObjects function (not shown in the provided code) to perform the actual comparison. If the objects are equal, a success message is printed to the console along with the formatted actual object. Otherwise, a failure message is printed along with the formatted actual object.
*/
