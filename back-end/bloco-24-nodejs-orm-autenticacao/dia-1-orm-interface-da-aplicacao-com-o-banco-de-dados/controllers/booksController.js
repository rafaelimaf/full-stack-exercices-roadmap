const getAllBooks = (req, res) => {
  try {
    return res.status(200).json({ books: {} });
  } catch (err) {
    return res.status(400).json({ message: 'Bad request' });
  }
};

module.exports = {
  getAllBooks
};
