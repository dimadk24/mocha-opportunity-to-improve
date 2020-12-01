var assert = require('assert');

describe('some function', () => {
  it('should work parent', () => {
    console.log('parent it block')

    // Accidentally created nested it block
    it('should work nested', () => {
      console.log('nested it block')
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});