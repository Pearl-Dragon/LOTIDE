const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`[PASS] Expected "${expected}", and got "${actual}"`);
  } else {
    console.log(`[FAIL] Expected "${expected}", but got "${actual}"`);
  }
};

const findKey = function(object, conditionFn) {
  for (let key in object) {
    if (object.hasOwnProperty(key) && conditionFn(object[key])) {
      return key;
    }
  }
  return null; // return null if no key satisfies the condition
};

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

// Test case 1: Searching for a key with stars equal to 2
const test1 = findKey(data, x => x.stars === 2);
assertEqual(test1, "noma");

// Test case 2: Searching for a key with stars equal to 3
const test2 = findKey(data, x => x.stars === 3);
assertEqual(test2, "Akaleri");

// Test case 3: Searching for a key with stars equal to 5 (non-existent value)
const test3 = findKey(data, x => x.stars === 5);
assertEqual(test3, null);

// Test case 4: Searching for a key with stars equal to 1 (single match)
const test4 = findKey(data, x => x.stars === 1);
assertEqual(test4, "Blue Hill");
