/**
 * 分词技术demo
 * @authors Qianlu
 * @date    2017-08-02
 */
var Segment = require('segment');
// 创建实例
var segment = new Segment();

// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();


// 开始分词
console.log(segment.doSegment('rio的鸡尾酒'));

console.log(segment.POSTAG.D_N);
