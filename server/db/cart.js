const Sequelize = require('sequelize');
const db = require('./connection');

const Cart = db.define('cart', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  sessionId: {
    type: Sequelize.STRING,
  },
  userId: {
    type: Sequelize.UUID,
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  purchaseDate: {
    type: Sequelize.DATE,
  },
});

Cart.beforeSave(instance => {
  if (instance.changed('active') && instance.active === false) {
    instance.purchaseDate = (new Date());
  }
  return instance;
})

module.exports = Cart;
