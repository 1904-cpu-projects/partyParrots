const db = require('./connection');
const User = require('./user');
const Beverage = require('./beverage');
const Session = require('./session');
const Order = require('./order');
const CartItem = require('./cartItems');

Order.belongsTo(User);
User.hasMany(Order);

CartItem.belongsTo(Order);
Order.hasMany(CartItem);

CartItem.belongsTo(Beverage);
Beverage.hasMany(CartItem);

module.exports = {
  db,
  Beverage,
  User,
  Session,
};
