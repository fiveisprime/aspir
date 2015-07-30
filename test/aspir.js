var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();

var aspir = require('../');

lab.describe('aspir', function () {

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

  lab.describe('#exists', function () {
    lab.it('should return true for values that exist in a single level', function (done) {
      Code.expect(aspir.exists(obj, 'root')).to.be.true();
      done();
    });

    lab.it('should return true for values that exist nested multiple levels', function (done) {
      Code.expect(aspir.exists(obj, 'nested.foo')).to.be.true();
      done();
    });

    lab.it('should return true for array paths that exist', function (done) {
      Code.expect(aspir.exists(aobj, 'foo[0]')).to.be.true();
      done();
    });

    lab.it('should return false for values that do not exist', function (done) {
      Code.expect(aspir.exists(obj, 'test')).to.be.false();
      done();
    });

    lab.it('should return false for array paths with indexes that do not exist', function (done) {
      Code.expect(aspir.exists(aobj, 'foo[7]')).to.be.false();
      done();
    });
  });

  lab.describe('#get', function () {
    lab.it('should find single level nested property values', function (done) {
      var bar = aspir.get(obj, 'nested.foo');

      Code.expect(bar).to.equal('bar');
      done();
    });

    lab.it('should accept an array of properties', function (done) {
      var bar = aspir.get(obj, ['nested', 'foo']);

      Code.expect(bar).to.equal('bar');
      done();
    });

    lab.it('should find multiple level nested property values', function (done) {
      var nested = aspir.get(lobj, 'nested.very.nested');

      Code.expect(nested).to.equal('nested');
      done();
    });

    lab.it('should find array index', function (done) {
      var one = aspir.get(aobj, 'foo[1]');

      Code.expect(one).to.equal('one');
      done();
    });
  });
});
