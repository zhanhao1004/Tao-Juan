/**
 * 官方原生Mysql链接初始化
 * @authors Qianlu
 * @date    2017-08-02
 */
var Promise = require('bluebird');
var mysql = require('mysql');
var config = require('../config');
var log = require('../common/logger').getLogger('Core:MysqlConnection:index');

function MysqlConnection() {
    this.pool = null;
    this.conn = null;
    this.initPool();
}

MysqlConnection.prototype.initPool = function init() {
    this.pool = !this.pool ? this.createPool() : this.pool;
    log.info('[mysql] pool init success !');
};

MysqlConnection.prototype.createPool = function createPool() {
    return mysql.createPool({
        host: config.mysql.host,
        user: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.database
    });
};

MysqlConnection.prototype.getPool = function getPool() {
    var self = this;
    if (self.pool) {
        return Promise.resolve(self.pool);
    } else {
        return new Promise(function (resolve, reject) {
            self.pool = self.createPool();
            return resolve(self.pool);
        });
    }
};


var SqlClient = new MysqlConnection(); // 实例
module.exports = SqlClient;