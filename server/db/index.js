const db = require('./connection');
const User = require('./user');
const Beverage = require('./beverage');
const Session = require('./session');

module.exports = {
  db,
  Beverage,
  User,
  Session,
};
