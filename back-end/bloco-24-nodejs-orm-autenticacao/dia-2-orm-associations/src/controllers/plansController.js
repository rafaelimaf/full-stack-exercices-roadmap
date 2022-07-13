const plansService = require('../services/plansService');

const getPlanPatientsById = async (req, res) => {
  const { id } = req.params;

  try {
    const planPatients = await plansService.getPlanPatientsById(id);
    return res.status(200).json(planPatients);
  } catch (err) {
    console.log('Erro no controller getPlanPatientsById ', err.message);
    return res.status(400).send('Bad request');
  }
};

module.exports = {
  getPlanPatientsById
};
