// Fn takes an array and returns either a portion of the array containing the two elements surrounding the middle index (if the array length is even) or a single-element array containing the element at the middle index (if the array length is odd).
const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {     //checks if the length of the arr array is even or odd by using the modulus operator %
    return arr.slice(middleIndex - 1, middleIndex + 1);  //If array length = even, the function uses the slice method to extract a portion of the array
  } else {
    return [arr[middleIndex]]; //If array length is odd, the function creates a new array of a single element = the element at the middle index (arr[middleIndex]).
  }
};

module.exports = middle;




/*  Notes below for personal reference:

It calculates the middle index of the arr array by dividing its length by 2 using Math.floor() to round down to the nearest integer. The result is stored in the middleIndex variable.
The function then checks if the length of the arr array is even or odd by using the modulus operator %. If the length is divisible by 2 (i.e., has no remainder), it means the array has an even number of elements.
If the array length is even, the function uses the slice method to extract a portion of the array starting from middleIndex - 1 and ending at middleIndex + 1. This means it returns a new array containing the two elements surrounding the middle index.
If the array length is odd, the function creates a new array containing a single element, which is the element at the middle index (arr[middleIndex]).
The function then returns the extracted portion or the single-element array depending on the length of the input array.*/