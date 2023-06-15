const middle = function(arr) {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return arr.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return [arr[middleIndex]];
  }
};

module.exports = middle;