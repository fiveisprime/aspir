var aspir  = require('../')
  , expect = require('chai').expect;

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
      expect(aspir.exists(obj, 'root')).to.equal(true);
    });

    it('should return true for values that exist nested multiple levels', function() {
      expect(aspir.exists(obj, 'nested.foo')).to.equal(true);
    });

    it('should return true for array paths that exist', function() {
      expect(aspir.exists(aobj, 'foo[0]')).to.equal(true);
    });

    it('should return false for values that do not exist', function() {
      expect(aspir.exists(obj, 'test')).to.equal(false);
    });

    it('should return false for array paths with indexes that do not exist', function() {
      expect(aspir.exists(aobj, 'foo[7]')).to.equal(false);
    });
  });

  describe('#get', function() {
    it('should find single level nested property values', function() {
      var bar = aspir.get(obj, 'nested.foo');

      expect(bar).to.equal('bar');
    });

    it('should accept an array of properties', function() {
      var bar = aspir.get(obj, ['nested', 'foo']);

      expect(bar).to.equal('bar');
    });

    it('should find multiple level nested property values', function() {
      var nested = aspir.get(lobj, 'nested.very.nested');

      expect(nested).to.equal('nested');
    });

    it('should find array index', function() {
      var one = aspir.get(aobj, 'foo[1]');

      expect(one).to.equal('one');
    });
  });
});
