const test = require('ava');
const random = require('./helpers/random');
const all = require('./products');

test('all()', t => {
  t.true(all.length > 0);
});

test('random()', t => {
  t.truthy(random(all));
  t.not(random(all), random(all));
});
