const booksService = require('../services/booksService');

const getAllBooks = async (_req, res) => {
  try {
    const books = await booksService.getAllBooks();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(400).json({ message: 'Bad request' });
  }
};

module.exports = {
  getAllBooks
};
