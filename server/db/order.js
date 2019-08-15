const Sequelize = require('sequelize');
const db = require('./connection');
const OrderItem = require('./orderItem');

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

Order.prototype.setUser = function({ id }) {
  this.userId = id;
  this.sessionId = null;
  return this.save();
};

Order.prototype.setUserOrMerge = async function(user) {
  try {
    const existingOrder = await Order.findOne({
      where: { userId: user.id, purchased: false },
    });

    if (existingOrder) {
      await this.reload({ include: [{ model: OrderItem }] });
      const guestCartItems = this.order_items;

      console.log('items!!!', guestCartItems);

      guestCartItems.forEach(async guestCartItem => {
        const existingItem = await OrderItem.findOne({
          where: {
            beverageId: guestCartItem.beverageId,
            orderId: existingOrder.id,
          },
        });

        if (existingItem) {
          await Promise.all([
            existingItem.update({
              quantity: guestCartItem.quantity,
              purchasePrice: guestCartItem.purchasePrice,
            }),
            guestCartItem.destroy(),
          ]);
        } else {
          await guestCartItem.update({ orderId: existingOrder.id });
        }
      });

      return this.destroy();
    } else {
      console.log('setting user!!!');
      return this.setUser(user);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = Order;
