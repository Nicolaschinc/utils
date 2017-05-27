/**
 * created by Nico at 2017/05/26
 * 
 */

module.exports = {

    isUndefined: function(obj) {
        return obj === void 0;
    },
    isNull: function(obj) {
        return obj === null;
    },
    isObject: function(obj) {
        return Object.prototype.toString.call(obj) === '[Object Object]';
    },
    isBoolean: function(obj) {
        return Object.prototype.toString.call(obj) === '[Object Boolean]';
    },
    isArray: function(Obj) {
        return Object.prototype.toString.call(obj) === '[Object Array]';
    },
    isFunction: function(obj) {
        return Object.prototype.toString.call(obj) === '[Object Function]';
    },
    isNumber: function(obj) {
        return Object.prototype.toString.call(obj) === '[Object Number]';
    },
    isDate: function(obj) {
        return Object.prototype.toString.call(obj) === '[Object Date]';
    },
    isString: function(obj) {
        return Object.prototype.toString.call(obj) === '[Object String]';
    },
    isNaN: function(obj) {
        return obj !== obj;
    },

}