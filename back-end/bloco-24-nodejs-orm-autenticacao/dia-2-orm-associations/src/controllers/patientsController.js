const patientsService = require('../services/patientsService');

const getAllPatients = async (req, res) => {
  try {
    const patients = await patientsService.getAllPatients();
    return res.status(200).json(patients);
  } catch (err) {
    console.log('Erro no controller patientsController.getPatientsAndPlans ', err.message);
    return res.status(400).send('Bad request');
  }
};

const getPatientsAndPlans = async (req, res) => {
  try {
    const patients = await patientsService.getPatientsAndPlans();
    return res.status(200).json(patients);
  } catch (err) {
    console.log('Erro no controller patientsController.getPatientsAndPlans ', err.message);
    return res.status(400).send('Bad request');
  }
};

const getPatientsAndSurgeries = async (req, res) => {
  try {
    const patients = await patientsService.getPatientsAndSurgeries();
    return res.status(200).json(patients);
  } catch (err) {
    console.log('Erro no controller patientsController.getPatientsAndSurgeries ', err.message);
    return res.status(400).send('Bad request');
  }
};

const createPatient = async (req, res) => {
  const { patientId, fullName, planId } = req.body;

  try {
    const patient = await patientsService.createPatient(patientId, fullName, planId);
    return res.status(201).json(patient);
  } catch (err) {
    console.log('Erro no controller patientsController.createPatient ', err.message);
    return res.status(400).send('Bad request');
  }
};

module.exports = {
  getAllPatients,
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  createPatient
};
