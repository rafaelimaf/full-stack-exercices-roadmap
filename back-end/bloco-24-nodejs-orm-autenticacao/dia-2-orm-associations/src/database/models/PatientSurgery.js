module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    { timeStamps: false }
  );

  PatientSurgery.associate = (models) => {
    models.Surgerie.belongsToMany(models.Patient, {
      foreignKey: 'patient_id',
      as: 'patient',
      otherKey: 'surgery_id',
      through: PatientSurgery
    });
  };

  PatientSurgery.associate = (models) => {
    models.Surgerie.belongsToMany(models.Surgery, {
      foreignKey: 'surgery_id',
      as: 'surgerie',
      otherKey: 'patient_id',
      through: PatientSurgery
    });
  };

  return PatientSurgery;
};
