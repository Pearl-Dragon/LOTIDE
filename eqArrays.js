//function compares two arrays arr1 and arr2 for equality
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;  // If the arrays are NOT equal (same length and same elements in the same order)
    }
  }

  return true;// It returns true if the arrays are equal (same length and same elements in the same order)
};


module.exports = eqArrays;






/* Notes below for personal reference:


it takes two parameters: arr1 and arr2, which are arrays. Here's what the function does:

It first checks if the lengths of arr1 and arr2 are not equal. If the lengths are different, it means the arrays cannot be equal, so the function immediately returns false.
If the lengths of arr1 and arr2 are equal, the function proceeds to compare the elements of the arrays.
It iterates over each index i from 0 to the length of arr1 using a for loop.
For each index i, it compares the elements at the corresponding indices in arr1 and arr2.
If the elements at index i are not equal, it means the arrays are not equal, so the function returns false.
If the loop completes without finding any unequal elements, it means the arrays are equal, so the function returns true.
In summary, the eqArrays function compares two arrays arr1 and arr2 for equality. It returns true if the arrays are equal (same length and same elements in the same order), and false otherwise.*/