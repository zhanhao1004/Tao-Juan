/**
 * API 声明入口
 * @authors Qianlu
 * @date    2017-08-02
 */
var express = require('express');
var router = express.Router();
var HelloController = require('./api/controller/HelloController');

// web router setting
router.get('/hello', HelloController.hello);


module.exports = router;