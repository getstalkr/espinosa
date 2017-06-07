const {send} = require('micro');
const {router, get} = require('microrouter');
const random = require('./helpers/random');
const products = require('./products');

const randomHandler = async (req, res) =>
  send(res, 200, await Promise.resolve(random(products)));

const allHandler = async (req, res) =>
  send(res, 200, await Promise.resolve(products));

module.exports = router(
  get('/random', randomHandler),
  get('/all', allHandler)
);
