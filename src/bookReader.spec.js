const { books, FIRST, SECOND, THIRD, FOURTH, FIFTH } = require('./books')
const { totalPriceWithoutDiscount, totalDiscountPrice } = require('./bookReader')
let usedBooks
let expectedPrice

describe('bookReader', () => {
  describe('#totalPriceWithoutDiscount', () => {
    context('with one book', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST, price: 42 }]
        expectedPrice = FIRST.price
      })
      it(`returns the price of the book (42 euros)`, () => {
        expect(totalPriceWithoutDiscount(usedBooks)).toBe(42)
      })
    })
    context('with many books', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST, price: 42 },{ ...SECOND, price: 8 }]
        expectedPrice = FIRST.price
      })
      it(`returns the price of the two books (50 euros)`, () => {
        expect(totalPriceWithoutDiscount(usedBooks)).toBe(50)
      })
    })
  })
  describe('#totalDiscount', () => {
    context('with one book', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST}]
        expectedPrice = FIRST.price
      })
      it(`returns 0`, () => {
        expect(totalDiscountPrice(usedBooks)).toEqual(0)
      })
    })
    context('with 2 differents books', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST, price: 8 },{ ...SECOND, price: 8 }]
        expectedPrice = 0.8
      })
      it(`returns the discount of the two books (${expectedPrice} euros)`, () => {
        expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
      })
      context('with one more common book', () => {
        beforeEach(() => {
          usedBooks = [...usedBooks, { ...FIRST, price: 8 }]
        }),
          it(`does not change the discount and returns the discount of the two books (${expectedPrice} euros)`, () => {
            expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
          })
      })
    })
    context('with 3 differents books', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST, price: 8 },{ ...SECOND, price: 8 },{ ...THIRD, price: 8 }]
        expectedPrice = 2.4
      })
      it(`returns the discount of the three books (${expectedPrice} euros)`, () => {
        expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
      })

      context('with one more common book', () => {
        beforeEach(() => {
          usedBooks = [...usedBooks, { ...FIRST, price: 8 }]
        }),
          it(`does not change the discount and returns the discount of the two books (${expectedPrice} euros)`, () => {
            expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
          })
      })
    })
    context('with 4 differents books', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST, price: 8 },{ ...SECOND, price: 8 },{ ...THIRD, price: 8 },{ ...FOURTH, price: 8 }]
        expectedPrice = 6.4
      })
      it(`returns the discount of the four books (${expectedPrice} euros)`, () => {
        expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
      })

      context('with one more common book', () => {
        beforeEach(() => {
          usedBooks = [...usedBooks, { ...FIRST, price: 8 }]
        }),
          it(`does not change the discount and returns the discount of the two books (${expectedPrice} euros)`, () => {
            expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
          })
      })
    })
    context('with 5 differents books', () => {
      beforeEach(() => {
        usedBooks = [{ ...FIRST, price: 8 },{ ...SECOND, price: 8 },{ ...THIRD, price: 8 },{ ...FOURTH, price: 8 },{ ...FIFTH, price: 8 }]
        expectedPrice = 10
      })
      it(`returns the discount of the five books (${expectedPrice} euros)`, () => {
        expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
      })

      context('with one more common book', () => {
        beforeEach(() => {
          usedBooks = [...usedBooks, { ...FIRST, price: 8 }]
        }),
          it(`does not change the discount and returns the discount of the two books (${expectedPrice} euros)`, () => {
            expect(totalDiscountPrice(usedBooks)).toBe(expectedPrice)
          })
      })
    })
  })
})
