// Fn takes a sentence and returns an object that maps each alphabetic letter (case-insensitive) in the sentence to its count. Non-alphabetic characters are skipped during the counting process.
const countLetters = function(sentence) {
  const letterCount = {};
  // Convert the sentence to lowercase to make the counting case-insensitive
  const lowercaseSentence = sentence.toLowerCase();

  // Iterate over each character in the sentence
  for (const char of lowercaseSentence) {
    // Skip non-alphabetic characters
    if (!char.match(/[a-z]/i)) {
      continue;  //If the char is not an alphabetic character, the function skips it and continues to the next iteration of the loop using the continue statement.
    }

    // Increment the count for the current letter
    letterCount[char] = (letterCount[char] || 0) + 1; //If letterCount[char] doesn't exist or has a falsy value, it initializes the count to 1.
  }

  return letterCount;     // function returns the letterCount object, which contains each letter (case-insensitive) as a key and its corresponding count as the value.
};


module.exports = countLetters;




/*Notes below for personal reference:

It takes one parameter: sentence, which is a string. Here's what the function does:

It initializes an empty object called letterCount to store the count of each letter in the sentence.
The sentence is converted to lowercase using the toLowerCase() method. This is done to make the counting case-insensitive.
It iterates over each character (char) in the lowercaseSentence using a for...of loop.
For each char, it first checks if it is a non-alphabetic character using a regular expression match. The regular expression /[a-z]/i matches any alphabetic character (case-insensitive).
If the char is not an alphabetic character, the function skips it and continues to the next iteration of the loop using the continue statement.
If the char is an alphabetic character, it increments the count for that letter in the letterCount object. It does this by assigning the value (letterCount[char] || 0) + 1 to the letterCount[char] property.
If letterCount[char] already exists and has a value, it increments the existing count by 1.
If letterCount[char] doesn't exist or has a falsy value, it initializes the count to 1.
After iterating over all the characters in the sentence, the function returns the letterCount object, which contains each letter (case-insensitive) as a key and its corresponding count as the value.

**** CountLetters function takes a sentence and returns an object that maps each alphabetic letter (case-insensitive) in the sentence to its count. Non-alphabetic characters are skipped during the counting process.
*/
