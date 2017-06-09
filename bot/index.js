const {add, commit, pull, push} = require('./git.js');
const {replace} = require('./fs.js');

const handleError = function (err) {
  console.log(`${err}`);
};

const gitRoutine = async function (type) {
  await add('./test.js');
  await commit(`${new Date().toLocaleString()}`, type);
  await pull();
  await push('origin', 'master');
};

const fixBuildsRoutine = function () {
  replace('<', '>')
    .then(() => console.log('Fixed'))
    .catch(handleError);
};

const breakBuildsRoutine = function () {
  replace('>', '<')
    .then(() => console.log('Broke'))
    .catch(handleError);
};

const main = async function () {
  setInterval(async function () {
    await breakBuildsRoutine();
    await gitRoutine('break');
    await fixBuildsRoutine();
    await gitRoutine('fix');
  }, 1800000);
};

main();
