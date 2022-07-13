module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    specialty: {
      type: DataTypes.STRING
    },
    doctor: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  });

  return Surgery;
};
