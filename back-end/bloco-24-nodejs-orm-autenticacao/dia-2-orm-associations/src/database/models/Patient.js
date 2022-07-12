module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: DataTypes.STRING
    },
    plan_id: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  },
  {
    timeStamps: false
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, {
      foreignKey: 'plan_id', as: 'plan'
    });
  };

  return Patient;
};
