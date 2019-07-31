const Sequelize = require('sequelize');

const url = process.env.DATABASE_URL || 'postgres://:5432/grace-shopper';

const db = new Sequelize(url, {
  logging: false,
});

module.exports = db;
