'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Task', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    timestamps: true,
    classMethods: {
      associate(models) {
        this.belongsTo(models.User);
      }
    }
  });
}
