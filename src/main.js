var index = require("./index");
var common = require("./common");

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