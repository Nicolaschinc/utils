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