const Sequelize = require('express-session');
const { db } = require('./connection');

const Session = db.define('session', {
  sid: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  userId: Sequelize.STRING,
  expires: Sequelize.DATE,
  data: Sequelize.STRING(50000),
});

module.exports = Session;
