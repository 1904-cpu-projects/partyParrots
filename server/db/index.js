const db = require('./connection');
const Sequelize = require('sequelize');

const Beverage = db.define('beverage', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING
  },
  manufacturer: {
    type: Sequelize.STRING
  },
  percentAlcohol: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.ENUM(['category1','category2', 'category3'])
  },
  price: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imageURL: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  Beverage
};
