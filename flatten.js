const eqArrays = function(arr1, arr2) {
  if (arr1.length !==arr2.length) {
    return false;
  }
for(let i = 0; i< arr1.length;i++) {
  if (arr1[i] !== arr2[i]) {
    return false;

  }
}
return true;
};
const assertArraysEqual = function(actual, expected) {
  const isEqual = eqArrays(actual, expected);
  if (isEqual) {
    console.log(`👍 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🆘 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
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
const input = [1, 2, [3, 4], 5, [6]];
const flattened = flatten(input);

assertArraysEqual(flattened, [1, 2, 3, 4, 5, 6]);