const Sequelize = require('sequelize');
const db = require('./connection');

const Address = db.define('address', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  address1: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  address2: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
  }
})

module.exports = Address;
