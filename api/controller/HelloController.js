/**
 * @authors Qianlu
 * @date    2017-08-02
 */
var co = require('co');
var log = require('../../common/logger').getLogger('HelloController');

module.exports = {

    /**
     * say hello
     * @param req
     * @param res
     * @param next
     */
    hello: function (req, res, next) {
        co(function*() {
            return res.wrapAPI("Hello");
        }).catch(next);
    },
};
