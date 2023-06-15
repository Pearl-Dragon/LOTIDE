//const eqArrays = require('./eqArrays'); will be removed if not needed by other parts of the project
const assertArraysEqual = require('./assertArraysEqual');


const flatten = function(arr) {
  const flattenedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nestedArray = arr[i];
      flattenedArray.push(...nestedArray);
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  
  return flattenedArray;
};
const input = [1, 2, [3, 4], 5, [6]];
const flattened = flatten(input);

assertArraysEqual(flattened, [1, 2, 3, 4, 5, 6]);

module.exports = flatten;