const { Patient, Plan, Surgery } = require('../database/models');

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
      include: { model: Surgery, as: 'surgery', through: { attributes: [] } }
    });
    return patients;
  } catch (err) {
    console.log('Erro na service patientsService.getPatientsAndSurgeries ', err.message);
  }
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries
};
