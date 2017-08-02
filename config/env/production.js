/**
 * @authors Qianlu
 * @date    2017-08-02
 */
module.exports = {
    //mysql配置
    mysql: {
        username: 'root',
        password: '123456',
        database: 'juan',
        host: '127.0.0.1',
        dialect: 'mysql',
        timezone: '+08:00',
        logging: false,
        pool: {
            max: 100,
            min: 5,
            idle: 10000   // ms
        }
    },
    //日志
    log: {
        "appenders": [
            {
                type: 'console'
            },
        ],
        // "levels": {
        // 	"dateFile": "ERROR",
        // 	"MT": "DEBUG",
        // 	"MO": "DEBUG"
        // }
    },

    //redis
    redis: {
        port: 6379,
        host: '127.0.0.1',
        db: 1
    }

};