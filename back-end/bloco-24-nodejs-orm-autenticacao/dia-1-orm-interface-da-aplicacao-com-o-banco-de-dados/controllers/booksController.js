const booksService = require('../services/booksService');

const getAllBooks = async (_req, res) => {
  try {
    const books = await booksService.getAllBooks();
    return res.status(200).json(books);
  } catch (err) {
    console.log('Erro no controller getAllBooks: ', err.message);
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
    console.log('Erro no controller getBookById: ', err.message);
    return res.status(404).json({ message: 'Bad request' });
  }
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = {
    title, author, pageQuantity
  };

  try {
    await booksService.createBook(newBook);
    return res.status(201).json({ message: 'Book was created with sucess' });
  } catch (err) {
    console.log('Erro no controller createBook: ', err.message);
    return res.status(400).json({ message: 'Bad request' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};
