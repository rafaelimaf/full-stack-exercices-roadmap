const express = require('express');
const booksController = require('../controllers/booksController');

const router = express();

router.get('/', booksController.getAllBooks);

router.get('/:id', booksController.getBookById);

router.post('/', booksController.createBook);

router.put('/:id', booksController.editBook);

module.exports = router;
