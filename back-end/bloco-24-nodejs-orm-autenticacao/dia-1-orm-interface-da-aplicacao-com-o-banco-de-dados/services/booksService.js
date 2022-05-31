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

const getBookById = async (id) => {
  try {
    const book = await Book.findByPk(id);
    return book;
  } catch (err) {
    console.log('Erro na service getBookById: ', err.message);
  }
};

module.exports = {
  getAllBooks,
  getBookById
};
