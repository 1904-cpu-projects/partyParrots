const Sequelize = require('sequelize');
const db = require('./connection');

const OrderItem = db.define('order_item', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  // orderId: {
  //   type: Sequelize.UUID,
  //   allowNull: false,
  // },
  // beverageId: {
  //   type: Sequelize.UUID,
  //   allowNull: false,
  // },
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

module.exports = OrderItem;
