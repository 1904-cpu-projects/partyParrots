const Sequelize = require('sequelize');
const db = require('./connection');

const Order = db.define('order', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  purchaseDate: {
    type: Sequelize.DATE,
  },
  sessionId: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Order.beforeSave(instance => {
  if (instance.changed('purchased') && instance.purchased === true) {
    instance.purchaseDate = new Date();
  }
  return instance;
});

module.exports = Order;
