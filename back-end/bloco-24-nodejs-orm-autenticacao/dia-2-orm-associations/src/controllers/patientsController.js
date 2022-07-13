const patientsService = require('../services/patientsService');

const getPatientsAndPlans = async (req, res) => {
  try {
    const patients = await patientsService.getPatientsAndPlans();
    res.status(200).json(patients);
  } catch (err) {
    console.log('Erro no controller patientsController.getPatientsAndPlans ', err.message);
    res.status(400).send('Bad request');
  }
};

const getPatientsAndSurgeries = async (req, res) => {
  try {
    const patients = await patientsService.getPatientsAndSurgeries();
    res.status(200).json(patients);
  } catch (err) {
    console.log('Erro no controller patientsController.getPatientsAndSurgeries ', err.message);
    res.status(400).send('Bad request');
  }
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries
};
