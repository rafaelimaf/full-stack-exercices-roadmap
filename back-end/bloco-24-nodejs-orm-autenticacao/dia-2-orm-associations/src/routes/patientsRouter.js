const express = require('express');
const patientsController = require('../controllers/patientsController');

const router = express();

router.get('/', patientsController.getAllPatients);

router.get('/plans', patientsController.getPatientsAndPlans);

router.get('/surgeries', patientsController.getPatientsAndSurgeries);

router.post('/', patientsController.createPatient);

module.exports = router;
