const {eqObjects} = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  //const util = require("util");
  const inspect = require("util").inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`Objects are equal: ${inspect(actual)}`);
  } else {
    console.log(`Objects are not equal: ${inspect(actual)}`);
  }
};
  
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Jane", age: 25 };

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);



module.exports = assertObjectsEqual;
