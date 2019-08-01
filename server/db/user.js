const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

const db = require('./connection');
const { authError } = require('../../utils/backend');

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    defaultValue: db.Sequelize.UUIDV4,
    unique: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png',
    validate: {
      isUrl: true,
    },
  },
});

User.beforeCreate(async instance => {
  const hash = await User.hash(instance.password);
  instance.password = hash;
  return hash;
});

User.beforeUpdate(async instance => {
  if (instance.changed('password')) {
    const hash = await User.hash(instance.password);
    instance.password = hash;
  }
  return instance;
});

User.prototype.toJSON = function() {
  const values = this.get();
  delete values.password;
  return values;
};

User.hash = str => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(str, 12, (err, hash) => {
      if (err) {
        reject(err);
      } else if (hash) {
        resolve(hash);
      }
    });
  });
};

User.comparePasswords = (inputStr, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(inputStr, password, (err, success) => {
      if (err) {
        reject(err);
      } else if (success) {
        resolve(true);
      } else {
        const error = authError('Invalid password.', 'password');
        reject(error);
      }
    });
  });
};

User.login = async function(email, password) {
  try {
    const user = await this.findOne({ where: { email } });
    if (!user && !user.id) {
      throw authError('No user registered with that email.', 'email');
    }
    await this.comparePasswords(password, user.password);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = User;
