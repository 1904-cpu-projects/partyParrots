const Sequelize = require('sequelize');
const db = require('./connection');
const { BeverageCategories } = require('../../utils/index');
const { QuantityError } = require('../../utils/backend');

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

Beverage.updateQuantity = async function(id, operation, quantity) {
  try {
    const beverage = await this.findOne({ where: { id } });

    if (!beverage) {
      throw Error('No beverage with id ' + id);
    }

    let newQuantity;

    if (operation === 'add') {
      newQuantity = beverage.quantity + quantity;
    } else if (operation === 'subtract') {
      if (quantity > beverage.quantity) {
        throw new QuantityError(id, beverage.quantity);
      }
      newQuantity = beverage.quantity - quantity;
    }

    return beverage.update({ quantity: newQuantity });
  } catch (error) {
    throw error;
  }
};

module.exports = Beverage;
