const { totalPrice } = require('./bookReader')
const arg = process.argv.slice(2);
const books = JSON.parse(arg)
const price = totalPrice(books)
console.log(price)
return price
