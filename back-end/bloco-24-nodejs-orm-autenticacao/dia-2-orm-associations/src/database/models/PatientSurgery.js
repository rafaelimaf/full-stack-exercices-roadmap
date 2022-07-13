module.exports = (sequelize, DataTypes) => {
  const PatientSurgery = sequelize.define(
    'PatientSurgery',
    {},
    { timestamps: false }
  );

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Patient, {
      foreignKey: 'patient_id',
      as: 'patient',
      otherKey: 'surgery_id',
      through: PatientSurgery
    });
  };

  PatientSurgery.associate = (models) => {
    models.Surgery.belongsToMany(models.Surgery, {
      foreignKey: 'surgery_id',
      as: 'surgerie',
      otherKey: 'patient_id',
      through: PatientSurgery
    });
  };

  return PatientSurgery;
};
