const Sequelize = require('sequelize');
const db = require('./connection');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    unique: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png',
    validate: {
      isUrl: true,
    },
  },
})

module.exports = User;
