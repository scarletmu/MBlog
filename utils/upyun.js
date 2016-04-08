'use strict';
const config = require('../config');
const md5 = require('./md5');

exports.getToken = function (savePath, args) {
  var parameter = {
    "bucket": Config.upyun.bucket,
    "expiration": ~~(new Date() / 1000) + Config.upyun.expiration,
    "save-key": savePath,
    "allow-file-type": 'png,jpg',
    "notify-url": `${Config.upyun.callback.host}/${Config.upyun.callback.path}`,
    'ext-param': args['ext-param']
  };
  var policy = new Buffer(JSON.stringify(parameter)).toString('base64');
  var signature = md5(policy + '&' + Config.upyun.formSecret);
  return Promise.resolve({
    policy,
    signature
  });
};
