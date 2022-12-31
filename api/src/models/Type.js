const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo para los Tipos de Pokemon
  sequelize.define("type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);
};