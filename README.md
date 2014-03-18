Aspir
=====

[![Build Status](https://travis-ci.org/fiveisprime/aspir.png?branch=master)](https://travis-ci.org/fiveisprime/aspir) [![Dependency Status](https://david-dm.org/fiveisprime/aspir.png?theme=shields.io)](https://david-dm.org/fiveisprime/aspir) [![NPM version](https://badge.fury.io/js/aspir.png)](http://badge.fury.io/js/aspir)

Check for and find object values using a string path.

# Usage

Check if properties exists based on a string path.

```js
var aspir = require('aspir');

var obj = {
  root: 'root'
, nested: {
    foo: 'bar'
  }
, things: [
    'one'
  ]
};

aspir.exists(obj, 'nested.foo'); // Returns true.
aspir.exists(obj, 'things[0]');  // Returns true.
aspir.exists(obj, 'things[1]');  // Returns false.
```

Find the value of properties in an object no matter how nested they are.

```js
var aspir = require('aspir');

var obj = {
  root: 'root'
, nested: {
    foo: 'bar'
  }
};

var bar = aspir.get(obj, 'nested.foo');
console.log(bar); // Prints 'bar'.
```

Find the value of arrays in properties by specifying the index.

```js
var aspir = require('aspir');

var obj = {
  root: 'root'
, foo: [
    'zero'
  , 'one'
  , 'two'
  ]
};

var one = aspir.get(obj, 'foo[1]');
console.log(one); // Prints 'one'.
```

# License

The MIT License (MIT)

Copyright (c) 2014 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
