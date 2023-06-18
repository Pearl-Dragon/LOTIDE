//This Fn takes two parameters: array and callback.
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {  //It iterates over each element (item) in the array using a for...of loop.
    if (callback(item)) {
      return results;
    }
    results.push(item); //If the callback function returns false for the current item, it means the condition to stop taking items has not been met yet. Therefore, the item is added to the results array using the push method.
  }
  return results;   //results array contains the selected items up until the condition specified by the callback function is met.
};



module.exports = takeUntil;




/* Notes below for personal reference:

It initializes an empty array called results to store the selected items.
It iterates over each element (item) in the array using a for...of loop.
For each item, it calls the callback function and passes the item as an argument. The callback function is expected to return a boolean value.
If the callback function returns true for the current item, it means the condition to stop taking items has been met. In this case, the function immediately returns the results array without further processing.
If the callback function returns false for the current item, it means the condition to stop taking items has not been met yet. Therefore, the item is added to the results array using the push method.
The loop continues until either the callback function returns true or all elements in the array have been processed.
After the loop finishes, the function returns the results array containing the selected items up until the condition specified by the callback function is met.
In summary, the takeUntil function takes an array and a callback function. It iterates over the array and collects elements until the callback function returns true for an element. It then returns the collected elements in a new array.*/