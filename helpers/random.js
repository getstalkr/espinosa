const uniqueRandomArray = require('unique-random-array');

const element = arr =>
  uniqueRandomArray(arr)();

const number = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const boolean = function () {
  return ~~(Math.random() * 2) ? true : false;
};

exports.element = element;
exports.boolean = boolean;
exports.number = number;
