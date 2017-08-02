/**
 * API 自定义错误 标准
 * @authors Qianlu
 * @date    2017-08-02
 */

var apiError = {};
var apiErrorTypes = {
	AuthFailedError: {
		name: 'AuthFailedError',
		code: '01',
		msg: '认证失败'
	},
	ParamsError: {
		name: 'ParamsError',
		code: '02',
		msg: '输入错误'
	},
	PowerError: {
		name: 'PowerError',
		code: '03',
		msg: '禁止访问'
	},
	NullError: {
		name: 'NullError',
		code: '04',
		msg: '内容不能为空 '
	},
	IllegalError: {
		name: 'IllegalError',
		code: '05',
		msg: '短信内容非法'
	},
	MobileIllegalError: {
		name: 'IllegalError',
		code: '06',
		msg: '手机号码格式非法'
	},
	ExtnoIllegalError: {
		name: 'ExtnoIllegalError',
		code: '07',
		msg: '扩展号码格式不正确'
	},
	SignIllegalError: {
		name: 'SignIllegalError',
		code: '08',
		msg: '签名不正确'
	},
	InternalError: {
		name: 'InternalError',
		code: '11',
		msg: '服务器有点忙'
	},
	DuplicatedError: {
		name: 'DuplicatedError',
		code: '12',
		msg: '该资源已存在'
	},
	NotFoundError: {
		name: 'NotFoundError',
		code: '14',
		msg: '所请求的资源并不存在'
	},
	InputBodyError: {
		name: 'InputBodyError',
		code: '15',
		msg: '输入参数不合法'
	}
};

apiError.self = new Function();
apiError.self.prototype.__proto__ = Error.prototype;
Object.keys(apiErrorTypes).forEach(function (errorName) {
	var customError = apiErrorTypes[errorName];
	var customErrorFunction = function (msg) {
		Error.stackTraceLimit = 10;
		Error.call(this);
		Error.captureStackTrace(this, arguments.callee);
		this.msg = msg || customError.msg;
		this.name = customError.name;
		this.code = customError.code
	};
	customErrorFunction.prototype.__proto__ = apiError.self.prototype;
	apiError[errorName] = customErrorFunction;
});
exports = module.exports = apiError;
