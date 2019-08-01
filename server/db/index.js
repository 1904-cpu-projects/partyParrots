const db = require('./connection');
const Sequelize = require('sequelize');

const Beverage = db.define('beverage', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    notEmpty: true,
    unique: true
  },
  manufacturer: {
    type: Sequelize.STRING,
    notEmpty: true
  },
  percentAlcohol: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    notEmpty: true
  },
  category: {
    type: Sequelize.ENUM(['category1','category2', 'category3'])
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  size: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://brouwlandprod-yappa.netdna-ssl.com/image/fancy/products-20151110012036-0175273.jpg'
  }
})

module.exports = {
  db,
  Beverage
};
