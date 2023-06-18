// Fn takes an object and a value and searches for the key associated with that value within the object.
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && object[key] === value) {
      return key;
    }
  }
  return undefined;  //It returns the key if found, or undefined if no matching key is found.
};


module.exports = findKeyByValue;




// Notes below for personal reference:

/*It iterates over each key-value pair in the object using a for...in loop, with the variable key representing the current key.
For each key, it first checks if the object has the key as its own property using the Object.prototype.hasOwnProperty.call() method. This ensures that only the object's own properties, and not properties inherited from its prototype chain, are considered.
If the key is an own property of the object and the corresponding value (object[key]) is equal to the value parameter, it means a match is found.
In such a case, the function immediately returns the key, indicating that it has found the key associated with the given value.
If no match is found after iterating through all the key-value pairs in the object, the function returns undefined to indicate that no key was found for the given value. */