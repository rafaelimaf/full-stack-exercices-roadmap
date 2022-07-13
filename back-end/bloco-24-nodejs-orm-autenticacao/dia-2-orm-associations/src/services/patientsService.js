const { Patient, Plan, Surgery } = require('../database/models');

const getAllPatients = async () => {
  try {
    const patients = await Patient.findAll();
    return patients;
  } catch (err) {
    console.log('Erro na service patientsService.getPatientsAndPlans ', err.message);
  }
};

const getPatientsAndPlans = async () => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plan' },
      attributes: { exclude: ['plan_id'] }
    });
    return patients;
  } catch (err) {
    console.log('Erro na service patientsService.getPatientsAndPlans ', err.message);
  }
};

const getPatientsAndSurgeries = async () => {
  try {
    const patients = await Patient.findAll({
      include: { model: Surgery, as: 'surgeries', through: { attributes: [] } }
    });
    return patients;
  } catch (err) {
    console.log('Erro na service patientsService.getPatientsAndSurgeries ', err.message);
  }
};

const createPatient = async (patientId, fullname, planId) => {
  try {
    const patient = await Patient.create({ patient_id: patientId, fullname, plan_id: planId });
    return patient;
  } catch (err) {
    console.log('Erro na service patientsService.createPatient ', err.message);
  }
};

module.exports = {
  getAllPatients,
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  createPatient
};
