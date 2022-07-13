const { Surgery, Patient } = require('../database/models');

const getSurgeriesByDoctor = async (doctor) => {
  try {
    const surgeries = await Surgery.findAll({
      where: { doctor },
      include: {
        model: Patient,
        as: 'patients',
        through: { attributes: [] }
      }
    });
    return surgeries;
  } catch (err) {
    console.log('Erro na service surgeriesService.getSurgeriesByDoctor ', err.message);
  }
};

module.exports = {
  getSurgeriesByDoctor
};
