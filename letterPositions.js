// Fn takes a sentence and returns an object that maps each letter (excluding spaces) in the sentence to an array of positions where the letter appears in the sentence.
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



module.exports = letterPositions;




// Notes below for personal reference:


/*Fn - takes one parameter: sentence, which is a string
It initializes an empty object called results to store the positions of each letter in the sentence.
It iterates over each character (letter) in the sentence using a for loop and keeping track of the current index with the variable i.
For each letter, it checks if the letter is not a space character (i.e., letter !== ' ').
If the letter is not a space character, it checks if the results object already has a property with the key equal to the letter. If it does, it means the letter has been encountered before.
If the letter is already a key in the results object, it pushes the current index i to the array associated with that letter key using the push method.
If the letter is not yet a key in the results object, it creates a new key-value pair in the results object. The key is the letter, and the value is an array containing the current index i.
After iterating over all the characters in the sentence, the function returns the results object containing the letters as keys and the corresponding array of positions as values.*/






