const uniqueRandomArray = require('unique-random-array');

function random(arr) {
  return uniqueRandomArray(arr)();
}

module.exports = random;
