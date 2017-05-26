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
    }
}