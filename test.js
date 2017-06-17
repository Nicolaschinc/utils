var index = require("./index");
var common = require("./common");


function Wrapper() {
    this.version = 1.0;
}

var _ = function() {
    return new Wrapper();
}

_.fn = _.prototype;


_.extend = _.fn.extend = function(obj) {
    var src, i = 0;

    src = obj;
    obj = this;

    for (var name in src) {
        if (src.hasOwnProperty(name)) {
            obj[name] = src[name];
        }
    }

    return obj;
};

_.extend(common);
_.extend(index);


module.exports = _;