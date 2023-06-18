//Fn compares two objects object1 and object2 for equality.

const eqArrays = require('./eqArrays');


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and their corresponding values are equal
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;





/*Notes below for personal reference:

eqObjects, and it takes two parameters: object1 and object2, which are objects. Here's what the function does:

It retrieves the keys from object1 using the Object.keys() method and stores them in the keys1 array.
It retrieves the keys from object2 using the Object.keys() method and stores them in the keys2 array.
It checks if the lengths of keys1 and keys2 are not equal. If the lengths are different, it means the objects have a different number of keys, so the function immediately returns false.
If the lengths of keys1 and keys2 are equal, the function proceeds to compare the keys and their corresponding values.
It iterates over each key (key) in the keys1 array using a for...of loop.
For each key, it checks if the value for that key in both objects is an array. If both values are arrays, it calls the eqArrays function (not shown in the provided code) to compare the arrays for equality.
If the values for the key are arrays and they are not equal (according to eqArrays), it means the objects are not equal, so the function returns false.
If the values for the key are not arrays, it compares them using the strict equality operator (===). If they are not equal, it means the objects are not equal, so the function returns false.
If the loop completes without finding any unequal keys or values, it means the objects are equal, so the function returns true.

****In summary, the eqObjects function compares two objects object1 and object2 for equality. It checks if the objects have the same keys and if the corresponding values for each key are equal. If any key or value is unequal, it returns false. If all keys and their corresponding values are equal, it returns true. Note that the function also handles the case where the values for a key are arrays, and it uses the eqArrays function to compare the arrays for equality.
*/




