const db = require('./connection');

const Beverage = db.define('beverage', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING
  },
  manufacturer: {
    type: Sequelize.STRING
  },
  percentAlcohol: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.ENUM([])
  },
  price: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  imageURL: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db,
  Beverage
};
