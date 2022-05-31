const { Book } = require('../models');

const getAllBooks = async () => {
  try {
    const books = await Book.findAll();
    console.log(books);
    return books;
  } catch (err) {
    console.log('Erro na service getAllBooks: ', err.message);
  }
};

module.exports = {
  getAllBooks
};
