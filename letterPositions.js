/*const letterPositions = function(sentence) {
  const results = {};
  
  // Logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  
  return results;
};

// Example usage
const sentence = "lighthouse in the house";
const positions = letterPositions(sentence);
console.log(positions);*/

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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍 Assertion Passed: Arrays are equal.`);
  } else {
    console.log(`🆘 Assertion Failed: Arrays are not equal.`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  
  return results;
};

// Step 2: Call the letterPositions function with a test sentence
const testSentence = "lighthouse in the house";
const positions = letterPositions(testSentence);

// Step 3: Compare the output with expected positions
console.log(positions);
// You can also use assertions to compare the output with expected positions
// For example, using the assertArraysEqual function
assertArraysEqual(positions.l, [0]);
assertArraysEqual(positions.i, [1, 11]);
assertArraysEqual(positions.g, [2]);
assertArraysEqual(positions.h, [3, 5, 15, 18]);
assertArraysEqual(positions.t, [4, 14]);
assertArraysEqual(positions.o, [6, 19]);
assertArraysEqual(positions.u, [7, 20]);
assertArraysEqual(positions.s, [8, 21]);
assertArraysEqual(positions.e, [9, 16, 22]);
assertArraysEqual(positions.n, [12]);
