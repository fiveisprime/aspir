//
//     Aspir
//     Copyright(c) 2013 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

var util = require('util');

module.exports = function(obj, prop) {
  var props = [];

  if (util.isArray(prop)) {
    props = prop;
  } else {
    props = prop.split('.');
  }

  while(props.length && (obj = obj[props.shift()]));

  return obj || null;
};
