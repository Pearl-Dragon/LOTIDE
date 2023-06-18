// Fn takes an array of items and an object specifying which items to count.

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;  //returns an object that maps the specified items to their counts in the original array. Items that are not specified in the itemsToCount object or have a falsy value are not included in the results.
};

module.exports = countOnly;





/*Notes below for personal refernce:

function is named countOnly, and it takes two parameters: allItems, which is an array, and itemsToCount, which is an object. Here's what the function does:

It initializes an empty object called results to store the counts of specific items.
It iterates over each element (item) in the allItems array using a for...of loop.
For each item, it checks if it exists as a key in the itemsToCount object.
If itemsToCount[item] is truthy (not undefined, null, or false), it means the item needs to be counted.
In that case, it checks if the item already exists as a key in the results object.
If results[item] exists, it increments its count by 1 (results[item] += 1).
If results[item] doesn't exist, it initializes its count to 1 (results[item] = 1).
After iterating over all the items in the allItems array, the function returns the results object, which contains the counts of specific items specified in the itemsToCount object.

****In summary, the countOnly function takes an array of items and an object specifying which items to count. It returns an object that maps the specified items to their counts in the original array. Items that are not specified in the itemsToCount object or have a falsy value are not included in the results.
*/