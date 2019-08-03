const db = require('./connection');
const User = require('./user');
const Beverage = require('./beverage');
const Session = require('./session');
const Cart = require('./cart');
const CartItem = require('./cartItems');

Cart.belongsTo(User);
User.hasMany(Cart);

CartItem.belongsTo(Cart);
Cart.hasMany(CartItem);

CartItem.belongsTo(Beverage);
Beverage.hasMany(CartItem);

db.sync({ force: true });

module.exports = {
  db,
  Beverage,
  User,
  Session,
};
