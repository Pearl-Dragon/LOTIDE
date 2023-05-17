/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual("hello", "world");
assertEqual(42, 42);*/

const countLetters = function(sentence) {
  const letterCount = {};
  // Convert the sentence to lowercase to make the counting case-insensitive
  const lowercaseSentence = sentence.toLowerCase();

  // Iterate over each character in the sentence
  for (const char of lowercaseSentence) {
    // Skip non-alphabetic characters
    if (!char.match(/[a-z]/i)) {
      continue;
    }

    // Increment the count for the current letter
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  return letterCount;
};
const sentence = 'Lighthouse Labs';
const result = countLetters(sentence);
console.log(result);