const uniqueRandomArray = require('unique-random-array');

const element = function (arr) {
  return uniqueRandomArray(arr)();
};

const number = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

exports.element = element;
exports.number = number;
