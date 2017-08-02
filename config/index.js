/**
 * config 默认入口文件
 * @authors Qianlu
 * @date    2017-08-02
 */

var debug = require('debug')('pass-sms-inbound:env');
var env = process.env.NODE_ENV === 'development' ? 'development' : 'production';

debug('load [%s] configuration.', env);

module.exports = require('./env/' + env);