const db = require('./connection');
const User = require('./user');
const Beverage = require('./beverage');
const Session = require('./session');
const Order = require('./order');
const OrderItem = require('./orderItem');

Order.belongsTo(User);
User.hasMany(Order);

OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);

OrderItem.belongsTo(Beverage);
Beverage.hasMany(OrderItem);

module.exports = {
  db,
  Beverage,
  User,
  Session,
  Order,
  OrderItem,
};
