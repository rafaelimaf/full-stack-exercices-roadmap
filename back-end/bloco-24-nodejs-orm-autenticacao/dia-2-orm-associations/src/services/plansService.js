const { Patient, Plan } = require('../database/models');

const getPlanPatientsById = async (id) => {
  try {
    const planPatients = await Plan.findByPk(id, {
      include: [{ model: Patient, as: 'patients' }]
    });
    return planPatients;
  } catch (err) {
    console.log('Erro na service plansService.getPlanPatientsById');
  }
};

module.exports = {
  getPlanPatientsById
};
