/**
 * sequelize框架数据库连接
 * @authors Qianlu
 * @date    2017-08-02
 */
var fs = require("fs");
var path = require("path");
var debug = require('debug')('pass-voice:models');
var Sequelize = require("sequelize");
var config = require('../config');
var log = require('../common/logger').getLogger('Core:Sequelize:index');


var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, config.mysql);
var db = {};

fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        debug('load ' + file);
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        debug('%s associate', modelName);
        db[modelName].associate(db);
    }
});

sequelize
    .sync()
    .catch(function (err) {
        console.error('connect to %s:%s error: ', config.mysql.host, 3306, err.message);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;