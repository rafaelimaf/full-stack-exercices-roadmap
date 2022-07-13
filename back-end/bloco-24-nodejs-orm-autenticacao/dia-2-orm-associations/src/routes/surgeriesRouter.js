const express = require('express');
const surgeriesController = require('../controllers/surgeriesController');

const router = express();

router.get('/:doctor', surgeriesController.getSurgeriesByDoctor);

module.exports = router;
