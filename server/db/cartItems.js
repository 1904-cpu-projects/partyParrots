const Sequelize = require('sequelize');
const db = require('./connection');

const CartItem = db.define('cart_item', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  cartId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  beverageId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  purchasePrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

module.exports = CartItem;
