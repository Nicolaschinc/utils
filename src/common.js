var indexFn = require("./index");

module.exports = {
    //获取url上的参数
    getUrlSearch: function(param) {
        var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        } else {
            return undefined;
        }
    },
    //数组去重
    uniqArray: function(arr) {
        var newArr = [];
        var objArr = {};

        for (var i = 0; i < arr.length; i++) {
            var tempVal = arr[i];
            if (objArr[tempVal] !== 1) {
                newArr.push(tempVal);
                objArr[tempVal] = 1;
            }
        }
        return newArr;
    },
    //对象是否为空
    isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    },
    //遍历
    each: function(obj, fun) {
        if (indexFn.isObject(obj)) {
            //对象
            var name;

            for (name in obj) {
                fun.call(obj, obj[name], name)
            }

        } else if (indexFn.isArray(obj)) {
            //数组
            var len = obj.length;
            var i = 0;

            for (; i < len; i++) {
                fun.call(obj[i], obj[i], i);
            }
            return obj;
        } else {
            console.log("error:traversal object is not Object or Array!")
        }
    },
    //超出长度。。。
    limitstr: function(str, length) {
        if (str.length > 0) {
            return str.slice(0, length) + '...';
        } else {
            return ''
        }

    },
    //去前后空格
    trim: function(str) {
        return indexFn.isString(str) ? str.replace(/[(^\s*)|(\s*$)]/g, "") : "str is not string";
    },
    //获取当前时间
    getCurrTime: function(type, isComplete) {
        var date = new Date(),
            pattern;

        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate(),

            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds();

        if (!indexFn.isUndefined(type)) {
            if (type === 'en') {
                if (isComplete) {
                    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
                } else {
                    return year + '-' + month + '-' + day;
                }
            } else if (type === 'cn') {
                if (isComplete) {
                    return year + '年' + month + '月' + day + '日 ' + hour + '时' + minute + '分' + second + '秒';
                } else {
                    return year + '年' + month + '月' + day + '日 ';
                }
            } else {
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            }
        }
    }
}