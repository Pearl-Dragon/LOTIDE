// This Fn function filters out elements from the source array that are present in the itemsToRemove array and returns a new array with the filtered items.
const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result; // the function returns the result array containing the filtered items.
};


module.exports = without;




/* Notes below for personal reference:

It initializes an empty array called result to store the filtered items.
It iterates over each element (item) in the source array using a for...of loop.
For each item, it checks if the itemsToRemove array does not include the current item using the includes method. The includes method returns true if the array contains the specified element.
If the item is not present in the itemsToRemove array, it means it should be included in the result, so it is pushed to the result array using the push method.
After iterating over all the elements in the source array, the function returns the result array containing the filtered items.
In summary, the without function filters out elements from the source array that are present in the itemsToRemove array and returns a new array with the filtered items.*/