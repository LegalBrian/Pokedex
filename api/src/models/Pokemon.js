const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  const ERR_MSG = "must be an integer greater than 0"
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNums(value) {
          if (!/^[a-zA-Z \-]+$/.test(value))
            throw new Error("The name should not have numbers");
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        intGTZ(value) {
          if (!/^([1-9][0-9]+|[1-9])$/.test(value))
            throw new Error("hp " + ERR_MSG);
        },
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        intGTZ(value) {
          if (!/^([1-9][0-9]+|[1-9])$/.test(value))
            throw new Error("attack " + ERR_MSG);
        },
      },
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        intGTZ(value) {
          if (!/^([1-9][0-9]+|[1-9])$/.test(value))
            throw new Error("defense " + ERR_MSG);
        },
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        intGTZ(value) {
          if (!/^([1-9][0-9]+|[1-9])$/.test(value))
            throw new Error("defense " + ERR_MSG);
        },
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        intGTZ(value) {
          if (!/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/.test(value))
            throw new Error("height " + ERR_MSG);
        },
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        intGTZ(value) {
          if (!/^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/.test(value))
            throw new Error("weight " + ERR_MSG);
        },
      },
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  { timestamps: false }
);
};
