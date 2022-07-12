module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    coverage: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DOUBLE
    }
  },
  {
    timeStamps: false
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Pantient, {
      foreignKey: 'plan_id', as: 'patient'
    });
  };

  return Plan;
};
