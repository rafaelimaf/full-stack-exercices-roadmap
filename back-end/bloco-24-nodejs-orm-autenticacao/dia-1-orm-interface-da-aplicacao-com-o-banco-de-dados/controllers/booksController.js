const booksService = require('../services/booksService');

const getAllBooks = async (_req, res) => {
  try {
    const books = await booksService.getAllBooks();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(400).json({ message: 'Bad request' });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await booksService.getBookById(id);
    return book === null
      ? res.status(404).json({ message: 'Book not found' })
      : res.status(200).json(book);
  } catch (err) {
    return res.status(404).json({ message: 'Bad request' });
  }
};

module.exports = {
  getAllBooks,
  getBookById
};
