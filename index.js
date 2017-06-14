const micro = require('micro');
const {router, get} = require('microrouter');
const {delay} = require('./helpers/delay');
const {element, number, boolean} = require('./helpers/random');
const products = require('./products');

const randomHandler = async function (req, res) {

  if (boolean()) {
    process.exit(1);
  }

  const timeout = number(5000, 15000);
  await delay(timeout);
  micro.send(res, 200, await Promise.resolve(element(products)));
};

const allHandler = async function (req, res) {

  if (boolean()) {
    process.exit(1);
  }

  const timeout = number(5000, 15000);
  await delay(timeout);
  micro.send(res, 200, await Promise.resolve(products));
};

const server = micro(router(
  get('/random', randomHandler),
  get('/all', allHandler)
));

server.listen(process.env.PORT || 3000, () => console.log('Listening...'))

exports.default = server
