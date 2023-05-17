/*for...of loop: iterates over the elements of an array directly, rather than using an index-based approach.

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {  //map function is defined with an array parameter array and a callback parameter callback
  const results = [];
  for (let item of array) {  // Inside the map function, for..of loop: iterates over the elements of an array directly, rather than using an index-based approach. For each iteration, we added console.log statements to display the original item before invoking the callback (item BEFORE), the transformed item after invoking the callback (item AFTER), and a separator (---).
    console.log('item BEFORE: ', item);  //Inside the loop, these console.log statements display the original item (item BEFORE), the transformed item after invoking the callback (item AFTER), and a separator (---). for...of loop iterates over each item in the array.
    console.log('item AFTER: ', callback(item));  //callback function callback(item) is invoked on each item, and the returned value is pushed into the results array using results.push(callback(item)).
    console.log('---');
  }
  return results; //The results array is defined at the beginning of the map function but is never populated with any values. As a result, the returned results array will always be empty. To fix that we modified the code by adding the transformed values to the results array during each iteration of the loop. This can be achieved by using the push method of the results array.
};
const results1 = map(words, word => word[0]); //when you call the map function with words and the callback function word => word[0], it will correctly map each word to its first character. The resulting array will be assigned to results1 and printed to the console using console.log(results1).
console.log(results1); //each element in the results1 array represents the first character of each word in the words array.

//this same problem can be written DIFFERENTLY: 
/*const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  
  for (let i = 0; i < array.length; i++) {   // for loop. It iterates over each element in the array, invokes the callback function on each element, and pushes the returned value into the results array.
    results.push(callback(array[i], i, array)); // results.push(callback(item)) line within the loop. This line invokes the callback function on each item and pushes the returned value into the results array using the push method. This ensures that the transformed values are stored in the results array during each iteration.
  }

  return results;
};

const results1 = map(words, word => word[0]);  //call the map function with words and the callback function word => word[0], it will correctly map each word to its first character
console.log(results1);  // resulting array will be assigned to results1, and finally, it will be printed to the console using console.log(results1).*/
cd
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
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

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// Example usage of assertArraysEqual with the map function

const words = ["ground", "control", "to", "major", "tom"];

// Test case 1: Map each word to its length
const results1 = map(words, word => word.length);
assertArraysEqual(results1, [6, 7, 2, 5, 3]);

// Test case 2: Map each word to its uppercase version
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Test case 3: Map each word to its last character
const results3 = map(words, word => word[word.length - 1]);
assertArraysEqual(results3, ["d", "l", "o", "r", "m"]);
