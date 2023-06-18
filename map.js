// Fn provides a way to transform each element of an array based on a specified operation or function.
const map = function(array, callback) {
  const results = [];  //initializes an empty array called results to store the transformed values.

  for (let item of array) {
    results.push(callback(item)); //For each item, it calls the callback function and passes the item as an argument.
  }

  return results;  //the function returns the results array containing the transformed values in the same order as the original array.
};

module.exports = map;




/* Notes below for personal reference:

It initializes an empty array called results to store the transformed values.
It iterates over each element (item) in the array using a for...of loop.
For each item, it calls the callback function and passes the item as an argument.
The callback function is expected to transform the item in some way and return the transformed value.
The transformed value returned by the callback function is then pushed to the results array using the push method.
After iterating over all the elements in the array, the function returns the results array containing the transformed values in the same order as the original array.
In summary, the map function takes an array and a callback function. It applies the callback function to each element of the array, collects the transformed values, and returns them in a new array. The purpose of the map function is to provide a way to transform each element of an array based on a specified operation or function. */