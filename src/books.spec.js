const { books } = require('./books')

describe('known books', () => {
  it('should know 5 books', () => {
    expect(books.length).toEqual(5)
  })
})
