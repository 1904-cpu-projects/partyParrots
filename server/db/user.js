const Sequelize = require('sequelize');
const db = require('./connection');

const User = db.define('user', {
  id: {
    type: db.Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    unique: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
})

//syncAndSeed for testing purposes
const userSyncAndSeed = async () => {
  await db.sync({force: false});
  await User.create({
    firstName: 'Prof',
    lastName: 'Katz',
    email: 'Prof@fullstack.com',
    password: 'whosEric'
  })
}

userSyncAndSeed();

module.exports = User;
