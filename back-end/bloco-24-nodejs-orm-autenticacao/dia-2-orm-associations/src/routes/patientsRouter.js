const express = require('express');
const patientsController = require('../controllers/patientsController');

const router = express();

router.get('/plans', patientsController.getPatientsAndPlans);

router.get('/surgeries', patientsController.getPatientsAndSurgeries);

module.exports = router;
