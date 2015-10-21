# bind-append

> **Creates a new function with the given `this` and the appended arguments.**
>
> . It works like Function.prototype.bind
>
> .. but does not pollute Function.prototype
>
> ... and appends the arguments to the new Function arguments
>
> .... instead of prepending them

# install

```sh
npm i -S bind-append
```

# use

```js
var bindAppend = require('bind-append');

function linear(x, a, b) {
    return a + b * x;
}

var fn = bindAppend(linear, null, 1, 2);

assert.equal(fn(0), 1);
assert.equal(fn(1), 3);
assert.equal(fn(2), 5);

```

# test
```sh
npm test
```


# API

### bindAppend(function, thisArg[, arg1[, arg2[, ...]]])

# license
MIT

# author
Andi Neck [@andineck](https://twitter.com/andineck)