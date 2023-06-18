//Fn takes an array of numbers and finds the smallest number among them
const min = function(numbers) {
  let smallest = numbers[0];     //It initializes a variable smallest with the value of the first element (numbers[0]) of the numbers array.
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {    // The loop starts at index 0 and continues until i is less than the length of the numbers array.
      smallest = numbers[i];   //If number[i] is smaller than the current smallest value, it updates the value of smallest to numbers[i].
    }
  }
  return smallest;  //represents the smallest number in the numbers array.

};

module.exports = min;




/* Notes below meant for personal reference:

It initializes a variable smallest with the value of the first element (numbers[0]) of the numbers array.
It then iterates over the elements of the numbers array using a for loop. The loop starts at index 0 and continues until i is less than the length of the numbers array.
For each element at index i, it compares the value of numbers[i] with the current value of smallest.
If numbers[i] is smaller than the current smallest value, it updates the value of smallest to numbers[i].
The loop continues until all elements in the numbers array have been compared.
Finally, the function returns the value of smallest, which represents the smallest number in the numbers array.
In summary, the min function takes an array of numbers and finds the smallest number among them. It iterates over the array, comparing each element with the current smallest value, and updates the smallest value accordingly. The function then returns the smallest number found.*/