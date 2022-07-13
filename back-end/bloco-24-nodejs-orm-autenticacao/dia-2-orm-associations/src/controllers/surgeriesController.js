const surgeriesService = require('../services/surgeriesService');

const getSurgeriesByDoctor = async (req, res) => {
  const { doctor } = req.params;

  try {
    const surgeries = await surgeriesService.getSurgeriesByDoctor(doctor);
    return res.status(200).json(surgeries);
  } catch (err) {
    console.log('Erro no controller surgeriesController.getSurgeriesByDoctor ', err.message);
    return res.status(400).send('Bad request');
  }
};

module.exports = {
  getSurgeriesByDoctor
};
