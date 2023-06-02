# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pearl-d/lotide` / Please install this on MAC OS because the fsevents package tuns on os:darwin OS and not on Windows

**Require it:**

`const _ = require('@pearl-d/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description

*eqArrays(actual, expected): This function compares two arrays (actual and expected) and returns true if they are equal, and false otherwise.

*assertArraysEqual(actual, expected): This function uses eqArrays to compare actual and expected arrays. If they are equal, it prints an assertion passed message. If they are not equal, it prints an assertion failed message.

*assertEqual(actual, expected): This function compares the actual and expected values and checks if they are equal. If the values are equal, it prints an assertion passed message. If the values are not equal, it prints an assertion failed message.
The assertEqual function is commonly used for comparing primitive values like strings, numbers, booleans, etc., and verifying their equality. It helps in providing clear feedback about whether the assertion passed or failed, making it easier to identify and debug any discrepancies in the values being compared.

*eqObjects(object1, object2): This function compares two objects (object1 and object2) and checks if they are equal. It compares the keys and values of the objects to determine their equality.

*findKey(object, conditionFn): This function takes an object and a conditionFn function as input. It searches for a key in the object that satisfies the condition specified by the conditionFn function. It returns the first key found that meets the condition, or undefined if no such key is found.

*findKeyByValue(object, value): This function takes an object and a value as input. It searches for a key in the object that corresponds to the given value. It returns the first key found that matches the value, or undefined if no such key is found.

*flatten(arr): This function takes an array (arr) as input and returns a new array that is a flattened version of the input array. The flattened array contains all the elements from the nested arrays within the input array, preserving their order.

*const assertObjectsEqual = function(actual, expected): This function compares two objects (actual and expected) and checks if they are equal. It uses the eqObjects function to perform the comparison and provides an assertion message based on the result.
The assertObjectsEqual function is typically used for asserting the equality of objects and providing feedback about whether the assertion passed or failed.

*countLetters(sentence): This function takes a sentence as input and counts the occurrence of each letter in the sentence. It returns an object (letterCount) where the keys are the letters found in the sentence, and the values are the corresponding counts.

*countOnly(allItems, itemsToCount): This function takes an array of allItems and an object itemsToCount as input. It counts the occurrences of specified items in the allItems array based on the keys present in itemsToCount. It returns an object where the keys are the specified items and the values are their corresponding counts.

*letterPositions(sentence): This function takes a sentence as input and returns an object that maps each unique letter in the sentence to an array of its positions (indices) within the sentence.

*map(array, callback): This function takes an array and a callback function as input. It applies the callback function to each element in the array and returns a new array containing the results of the callback function applied to each element.

*middle(arr): This function takes an array (arr) as input and returns the middle element(s) of the array. If the array has an odd number of elements, a single middle element is returned. If the array has an even number of elements, an array containing the two middle elements is returned.

*min(numbers): This function takes an array of numbers as input and returns the smallest number in the array.
The min function initializes a variable to store the current minimum value and sets it to the first element in the numbers array. It then iterates over each element in the array using a loop. 

*tail(array): This function takes an array (array) as input and returns a new array containing all elements of the input array except for the first element.
The tail function uses the Array.prototype.slice method to create a new array that starts from the second element of the input array.

*takeUntil(array, callback): This function takes an array (array) and a callback function as input. It returns a new array that contains elements from the original array until the callback function returns a truthy value.
The takeUntil function iterates over each element in the array using a loop. For each element, it applies the callback function. If the callback function returns a truthy value for a specific element, the function stops iterating and returns a new array that contains all elements up to (but not including) the element for which the callback returned a truthy value.

*without(source, itemsToRemove): This function takes an array (source) and an array of itemsToRemove as input. It returns a new array that contains all elements from the source array except for the elements specified in the itemsToRemove array.