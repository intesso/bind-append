var test = require('tape');
var bindAppend = require('./index');

test('should bind a and b', function(t){

  function linear(x, a, b) {
    return a + b * x;
  }

  var fn = bindAppend(linear, null, 1, 2);
  t.equal(fn(0), 1);
  t.equal(fn(1), 3);
  t.equal(fn(2), 5);

  t.end();
});