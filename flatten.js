// Fn takes an array and returns a new array with all the elements flattened into a single-level array. If the original array contains nested arrays, the function recursively extracts the elements from the nested arrays and includes them in the resulting flattened array.
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

module.exports = flatten;




/* Notes below for personal reference:


It initializes an empty array called flattenedArray to store the flattened elements.
It iterates over each element of the arr array using a for loop and keeps track of the current index with the variable i.
For each element at index i, it checks if the element itself is an array by using the Array.isArray() method.
If the element at index i is an array, it assigns the array to the variable nestedArray.
The function then uses the spread syntax (...) to push each element of the nestedArray into the flattenedArray. This spreads out the elements of the nested array and adds them individually to the flattenedArray.
If the element at index i is not an array, it directly pushes the element to the flattenedArray.
After iterating over all the elements in the arr array, the function returns the flattenedArray that contains all the elements flattened into a single-level array.*/