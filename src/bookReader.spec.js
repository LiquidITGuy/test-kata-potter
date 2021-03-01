const { books, FIRST, SECOND, THIRD, FOURTH, FIFTH } = require('./books')
const { totalPriceWithoutDiscount } = require('./bookReader')
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
})
