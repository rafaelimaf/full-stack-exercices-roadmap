const express = require('express');
const booksController = require('../controllers/booksController');

const router = express();

router.get('/', booksController.getAllBooks);

module.exports = router;
