const Sequelize = require('sequelize');
const db = require('./connection');
const { BeverageCategories } = require('../../utils/index');

const Beverage = db.define('beverage', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  manufacturer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  percentAlcohol: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.ENUM,
    values: BeverageCategories,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  size: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://brouwlandprod-yappa.netdna-ssl.com/image/fancy/products-20151110012036-0175273.jpg',
    validate: {
      isURL: true,
    },
  },
});

module.exports = Beverage;
