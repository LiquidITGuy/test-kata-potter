const _sumPrice = (accumulator, book) => accumulator + book.price
const totalPriceWithoutDiscount = (books) => books.reduce(_sumPrice, 0)


module.exports = { totalPriceWithoutDiscount }
