const { reversePolish, inputIncludesOperator, isOperator } = require('../src/reversePolish.js')
const { assert } = require('chai')

describe('reversePolish', () => {
  context('reversePolish', () => {
    it('adds', () => {
      assert.equal(reversePolish('1 1 +'), 2)
      assert.equal(reversePolish('3 9 +'), 12)
    })

    it('subtracts', () => {
      assert.equal(reversePolish('2 1 -'), 1)
      assert.equal(reversePolish('29 5 -'), 24)
    })

    it('multiplies', () => {
      assert.equal(reversePolish('3 3 *'), 9)
      assert.equal(reversePolish('8 3 *'), 24)
    })

    it('divides', () => {
      assert.equal(reversePolish('10 5 /'), 2)
      assert.equal(reversePolish('7 2 /'), 3.5)
    })

    it('divides by 0', () => {
      assert.equal(reversePolish('10 0 /'), Infinity)
    })

    it('adds twice', () => {
      assert.equal(reversePolish('2 2 + 3 +'), 7)
      assert.equal(reversePolish('29 122 + 34 +'), 185)
    })

    it('adds and subtracts', () => {
      assert.equal(reversePolish('5 2 + 3 -'), 4)
      assert.equal(reversePolish('5 2 - 3 +'), 6)
      assert.equal(reversePolish('5 2 - 3 7 + +'), 13)
    })

    it('adds and multiplies (order of operations)', () => {
      assert.equal(reversePolish('5 2 + 3 *'), 21)
      assert.equal(reversePolish('5 2 * 3 +'), 13)
      assert.equal(reversePolish('5 2 + 8 3 * +'), 31)
    })
  })

  context('inputIncludesOperator', () => {
    it('returns true when an operator is present', () => {
      assert.isTrue(inputIncludesOperator(['1', '1', '+']))
    })

    it('returns false when an operator is not present', () => {
      assert.isFalse(inputIncludesOperator(['1', '2', '3']))
    })
  })

  context('isOperator', () => {
    it('returns true if input is an operator', () => {
      assert.isTrue(isOperator('+'))
      assert.isTrue(isOperator('-'))
      assert.isTrue(isOperator('*'))
      assert.isTrue(isOperator('/'))
    })

    it('returns false if input is a number', () => {
      assert.isFalse(isOperator('0'))
      assert.isFalse(isOperator('1'))
    })
  })
})
