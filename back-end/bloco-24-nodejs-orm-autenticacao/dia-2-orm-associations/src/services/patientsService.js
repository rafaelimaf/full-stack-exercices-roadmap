const { Patient, Plan } = require('../database/models');

const getAll = async () => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plan' },
      attributes: { exclude: ['plan_id'] }
    });
    return patients;
  } catch (err) {
    console.log('Erro na service patientsService.getAll ', err.message);
  }
};

module.exports = {
  getAll
};
