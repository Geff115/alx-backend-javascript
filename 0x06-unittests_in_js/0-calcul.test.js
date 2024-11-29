const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { isTypedArray } = require('util/types');

describe('calculateNumber', () => {
  it('should return 4 when a = 1 and b = 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when a = 1 and b = 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 6 when a = 1.5 and b = 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 6 when a = 1.5 and b = 4.5 (rounds to nearest even)', () => {
    assert.strictEqual(calculateNumber(1.5, 4.5), 7);
  });

  it('should return -2 when a = -1.4 and b = -0.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -0.6), -2);
  });
});
