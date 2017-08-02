/**
 * common logger
 * @authors Qianlu
 * @date    2017-08-02
 */

var log4js = require('log4js');
var config = require('../config');

log4js.configure(config.log);

module.exports = log4js;