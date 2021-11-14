const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
		//insert date column info here. look at sequelize docs to figure out how to save the current date
	},
    height: {
      type: DataTypes.INTEGER,
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
    freezeTableName: true,
    underscored: true,
    modelName: "exercise",
  }
);

module.exports = Exercise;
