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

module.exports = letterPositions;
