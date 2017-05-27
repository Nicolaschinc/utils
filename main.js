var index = require("./index");
var common = require("./common");

//初始化函数
function Init() {

}

//对象初始化
var $ = function() {
    return new Init();
}


$.fn = $.prototype;