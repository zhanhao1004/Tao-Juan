/**
 * wrap middleware
 * @authors Qianlu
 * @date    2017-08-02
 */

var _ = require('lodash');

exports = module.exports = {

    /**
     * 代替api中的res.send
     * 和上一方法类似
     *
     * @returns {Function}
     */

    wrapApi: function () {
        return function (req, res, next) {
            res.wrapAPI = function wrap(raw) {
                if (res.headersSent) return;
                var data = {};
                switch (true) {
                    //自定义错误类型
                    case raw instanceof EAPIS.self:
                        data.code = raw.code;
                        data.msg = raw.msg;
                        data.data = [];
                        break;
                    //常规数据
                    default :
                        data.code = '00';
                        data.msg = '成功';
                        if (raw) {
                            data.data = raw;
                        }
                }
                res.send(data);
            };
            next()
        }
    }
};
