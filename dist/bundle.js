/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var Rln = __webpack_require__(1);

	window.Rln = Rln;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var index = __webpack_require__(2);
	var common = __webpack_require__(3);

	var _ = function() {
	    return new _.fn.init();
	}

	_.prototype = {
	    name: 'qqc'
	}

	_.fn = _.prototype;

	_.fn.init = function() {

	    return this;
	}

	_.fn.init.prototype = _.fn;

	_.extend = _.fn.extend = function(dest) {

	    var obj = this;

	    for (var property in dest) {
	        if (dest.hasOwnProperty(property)) {
	            obj[property] = dest[property];
	        }
	    }
	};



	_.extend(index)

	module.exports = _;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * created by Nico at 2017/05/26
	 * base type
	 */

	module.exports = {
	    isUndefined: function(obj) {
	        return obj === void 0;
	    },
	    isNull: function(obj) {
	        return obj === null;
	    },
	    isObject: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Object]';
	    },
	    isBoolean: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Boolean]';
	    },
	    isArray: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Array]';
	    },
	    isFunction: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Function]';
	    },
	    isNumber: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Number]';
	    },
	    isDate: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object Date]';
	    },
	    isString: function(obj) {
	        return Object.prototype.toString.call(obj) === '[object String]';
	    },
	    isNaN: function(obj) {
	        return obj !== obj;
	    },
	    has: function(obj, key) {
	        return Object.prototype.hasOwnProperty.call(obj, key);
	    }

	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var indexFn = __webpack_require__(2);

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

/***/ })
/******/ ]);