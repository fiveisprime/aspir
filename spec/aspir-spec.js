var aspir = require('../');

describe('aspir', function() {

  var obj = {
    root: 'root'
  , nested: {
      foo: 'bar'
    }
  };

  var lobj = {
    root: 'root'
  , nested: {
      foo: 'bar'
    , very: {
        nested: 'nested'
      }
    }
  };

  var aobj = {
    root: 'root'
  , foo: [
      'zero'
    , 'one'
    , 'two'
    ]
  };

  describe('#exists', function() {
    it('should return true for values that exist in a single level', function() {
      aspir.exists(obj, 'root').should.equal(true);
    });

    it('should return true for values that exist nested multiple levels', function() {
      aspir.exists(obj, 'nested.foo').should.equal(true);
    });

    it('should return true for array paths that exist', function() {
      aspir.exists(aobj, 'foo[0]').should.equal(true);
    });

    it('should return false for values that do not exist', function() {
      aspir.exists(obj, 'test').should.equal(false);
    });

    it('should return false for array paths with indexes that do not exist', function() {
      aspir.exists(aobj, 'foo[7]').should.equal(false);
    });
  });

  describe('#get', function() {
    it('should find single level nested property values', function() {
      var bar = aspir.get(obj, 'nested.foo');

      bar.should.equal('bar');
    });

    it('should accept an array of properties', function() {
      var bar = aspir.get(obj, ['nested', 'foo']);

      bar.should.equal('bar');
    });

    it('should find multiple level nested property values', function() {
      var nested = aspir.get(lobj, 'nested.very.nested');

      nested.should.equal('nested');
    });

    it('should find array index', function() {
      var one = aspir.get(aobj, 'foo[1]');

      one.should.equal('one');
    });
  });
});
