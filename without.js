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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    //console.log(`🆘Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);