const micro = require('micro');
const { router, get } = require('microrouter');
const random = require('./helpers/random');
const products = require('../products');

const randomHandler = async (req, res) =>
  micro.send(res, 200, await Promise.resolve(random(products)));

const allHandler = async (req, res) =>
  micro.send(res, 200, await Promise.resolve(products));

const server = micro(router(
  get('/random', randomHandler),
  get('/all', allHandler)
));

server.listen(process.env.PORT || 3000, () => console.log('Listening...'))

exports.default = server
