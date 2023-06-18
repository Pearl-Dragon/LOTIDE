// function takes an array and returns a new array containing all elements of the original array except the first element.
const tail = function(array) {
  return array.slice(1);  // "slices off" the first element of the array and returns the remaining elements.
};

module.exports = tail;





/* Notes below for personal reference:

The function uses the slice method on the array parameter.
The slice method is called with the argument 1, which means it returns a new array containing all elements starting from index 1 (the second element) of the original array.
The original array is not modified; instead, a new array is created and returned by the slice method.
The function then returns the newly created array, which contains all elements of the original array except the first element.
In summary, the tail function takes an array and returns a new array containing all elements of the original array except the first element. It effectively "slices off" the first element of the array and returns the remaining elements.
*/