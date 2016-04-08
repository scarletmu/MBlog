'use strict';
const crypto = require('crypto');

module.exports = exports = md5;

function md5(str) {
  var md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}
