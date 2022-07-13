const patientsService = require('../services/patientsService');

const getAll = async (req, res) => {
  try {
    const patients = await patientsService.getAll();
    res.status(200).json(patients);
  } catch (err) {
    console.log('Erro no controller patientsController.getAll ', err.message);
    res.status(400).send('Bad request');
  }
};

module.exports = {
  getAll
};
