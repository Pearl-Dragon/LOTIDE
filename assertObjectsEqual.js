/*const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};*/


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if all keys and their corresponding values are equal
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const util = require("util");
  const inspect = require("util").inspect;
  //const actualKeys = Object.keys(actual);
  //const expectedKeys = Object.keys(expected);
  
  //if (actualKeys.length !== expectedKeys.length) {
   // console.log("Objects are not equal.");
   // return;
  //}
  if (eqObjects(actual, expected)) {
    console.log(`Objects are equal: ${inspect(actual)}`);
  } else {
    console.log(`Objects are not equal: ${inspect(actual)}`);
  }
};
  //for (let key of actualKeys) {
   // if (actual[key] !== expected[key]) {
   //   console.log("Objects are not equal.");
   //   return;
   // }
 // }
  
  //console.log("Objects are equal.");
//};
const assertEqual = function(actual, expected) {
  if (typeof actual === "object" && typeof expected === "object") {
    if (eqObjects(actual, expected)) {
      console.log(`👍 Assertion Passed:`, actual, "===", expected);
    } else {
      console.log(`🆘 Assertion Failed:`, actual, "!==", expected);
    }
  } else {
    if (actual === expected) {
      console.log(`👍 Assertion Passed:`, actual, "===", expected);
    } else {
      console.log(`🆘 Assertion Failed:`, actual, "!==", expected);
    }
  }
};
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Jane", age: 25 };

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);
////assertEqual(5, 5);
//assertEqual("hello", "world");
//assertEqual(obj1, obj2);
//assertEqual(obj1, obj3);