const escape = string =>
  string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

exports.escape = escape;
