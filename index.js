//
//     Aspir
//     Copyright(c) 2015 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

void function() {

  //
  // Get the value of the specified path on the specified object.
  //
  function get(obj, path) {
    var props = [];

    if (path instanceof Array) {
      props = path;
    } else {
      props = path.split('.');
    }

    while(props.length && obj) {
      var prop = props.shift()
        , match = /(.+)\[([0-9]*)\]/.exec(prop);

      if (match && match.length === 3) {
        var name = match[1]
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
  }

  //
  // Check for the existence of the specified path on the specified object.
  //
  function exists(obj, path) {
    if (typeof path === 'string') path = path.split('.');

    if (!(path instanceof Array) || path.length === 0) return false;
    if (typeof obj !== 'object' || !obj) return false;

    var key = path.shift();

    if (/\[[0-9]\]/g.test(key)) return get(obj, key) !== null;
    if (path.length === 0) return Object.hasOwnProperty.apply(obj, [key]);

    return exists(obj[key], path);
  }

  //
  // Expose the functions.
  // ===
  //

  if (typeof module !== 'undefined') {
    module.exports.get = get;
    module.exports.exists = exists;
  } else {
    window.aspir = {
      get: get,
      exists: exists
    };
  }
}();
