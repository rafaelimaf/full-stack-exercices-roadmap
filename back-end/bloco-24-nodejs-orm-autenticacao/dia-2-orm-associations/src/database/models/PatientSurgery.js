module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    { timestamps: false }
  );

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
      through: PatientSurgery
    });
  };

  PatientSurgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
      through: PatientSurgery
    });
  };

  return PatientSurgery;
};
