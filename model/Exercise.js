const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Exercise extends Model {}

Exercise.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pushups: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    situps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pullups: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Exercise;
