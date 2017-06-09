const gitWrapper = require('simple-git');

const gitClient = gitWrapper();

const add = (...files) =>
  new Promise((resolve, reject) => {
    gitClient.add(files, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

const commit = (message, type) =>
  new Promise((resolve, reject) => {
    gitClient.commit(`🤖(${type}): ${message}`, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

const pull = () =>
  new Promise((resolve, reject) => {
    gitClient.pull((err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

const push = (remote, branch) =>
  new Promise((resolve, reject) => {
    gitClient.push(remote, branch, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });

exports.add = add;
exports.commit = commit;
exports.pull = pull;
exports.push = push;
