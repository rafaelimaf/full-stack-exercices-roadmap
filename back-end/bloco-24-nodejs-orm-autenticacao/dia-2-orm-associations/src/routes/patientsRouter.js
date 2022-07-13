const express = require('express');
const patientsController = require('../controllers/patientsController');

const router = express();

router.get('/', patientsController.getAll);

module.exports = router;
