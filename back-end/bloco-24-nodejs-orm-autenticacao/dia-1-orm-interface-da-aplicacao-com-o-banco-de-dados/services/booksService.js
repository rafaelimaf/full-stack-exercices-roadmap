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

const createBook = async (book) => {
  try {
    const createdBook = await Book.create(book);
    console.log(createdBook);
    return createdBook;
  } catch (err) {
    console.log('Erro na service createBook: ', err.message);
  }
};

const editBook = async (id, book) => {
  try {
    const [editedBook] = await Book.update(book, {
      where: {
        id
      }
    });
    return editedBook;
  } catch (err) {
    console.log('Erro na service editBook: ', err.message);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  editBook
};
