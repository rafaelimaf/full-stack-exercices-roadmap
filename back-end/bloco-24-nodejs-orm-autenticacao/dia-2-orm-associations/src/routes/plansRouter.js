const express = require('express');
const plansController = require('../controllers/plansController');

const router = express();

router.get('/:id', plansController.getPlanPatientsById);

module.exports = router;
