const replaceInFile = require('replace-in-file');
const {escape} = require('./helpers/RegExp.js');

const options = {
  files: [
    './test.js'
  ],
  encoding: 'utf8'
};

const replace = async function (from, to) {
  options.from = new RegExp(escape((`t\.true\(all\.length ${from} 0\);`)));
  options.to = `t.true(all.length ${to} 0);`;

  return new Promise((resolve, reject) => {
    replaceInFile(options, err => {
      if (err) {
        return reject(err);
      }
      return resolve('Sucessfully updated.');
    });
  });
};

exports.replace = replace;
