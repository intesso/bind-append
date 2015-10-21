module.exports = function bindAppend(fn, self) {
    var args = [].slice.call(arguments).slice(2);
    return function() {
      return fn.apply(self, [].slice.call(arguments).concat(args));
    };
};