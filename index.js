//
//     Aspir
//     Copyright(c) 2013 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var util = require('util');

module.exports = function(obj, path) {
  var props = [];

  if (util.isArray(path)) {
    props = path;
  } else {
    props = path.split('.');
  }

  while(props.length && obj) {
    var prop = props.shift()
      , match = /(.+)\[([0-9]*)\]/.exec(prop);

    if (match && match.length === 3) {
      var name  = match[1]
        , index = match[2];

      if (typeof obj[name] !== 'undefined') {
        obj = obj[name][index];
      } else {
        obj = null;
      }
    } else {
      obj = obj[prop];
    }
  }

  return obj || null;
};
