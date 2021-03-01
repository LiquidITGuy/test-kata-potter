const DISCOUNT = {
  0: () => 0,
  1: () => 0,
  2: price => price * 0.05,
  3: price => price * 0.10,
  4: price => price * 0.20,
  5: price => price * 0.25,
}

const _sumPrice = (accumulator, book) => accumulator + book.price
const _uniqueBooks = (value, index, books) => books.findIndex((book) => book.id === value.id) === index

const totalPriceWithoutDiscount = (books) => books.reduce(_sumPrice, 0)
const totalDiscountPrice = (books) => {
  const eligibleBooks = books.filter(_uniqueBooks)
  const discountMethod = DISCOUNT[eligibleBooks.length]
  return parseFloat(discountMethod(eligibleBooks.reduce(_sumPrice, 0)).toFixed(2));
}

const totalPrice = (books) => totalPriceWithoutDiscount(books) - totalDiscountPrice(books)

module.exports = { totalPriceWithoutDiscount, totalDiscountPrice, totalPrice }
