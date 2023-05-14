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
const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return arr.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return [arr[middleIndex]];
  }
};
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];

assertArraysEqual(middle(arr1), [3]);
assertArraysEqual(middle(arr2), [3, 4]);
