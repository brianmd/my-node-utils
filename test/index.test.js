const my = require('../index');

describe('my', ()=>{
  describe('finds functions', ()=>{
    it('returns true when is a function', ()=>{
      expect(my.isFunction(function(){})).to.be.true;
    })

    it('returns false when not a function', ()=>{
      expect(my.isFunction(4)).to.be.false;
      expect(my.isFunction('abc')).to.be.false;
    })

    it('returns collection of properties', ()=>{
      var fns = my.propertyNames(my);
      expect(fns.length).to.be.greaterThan(8);
    })

    it('returns collection of functions', ()=>{
      var fns = my.functionNames(my);
      expect(fns.length).to.be.greaterThan(2);
    })
  })

  describe('logging', ()=>{
    it('returns last argument', ()=>{
      expect(typeof my.identity).to.equal('function')
      expect(my.identity('.')).to.equal('.')
    })

    it('returns last argument', ()=>{
      expect(my.logit('.', '_')).to.equal('_')
    })
  })
})
