const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Exercise extends Model { }

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
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
    freezeTableName: true,
    underscored: true,
    modelName: "Exercise",
  }
);

module.exports = Exercise;
