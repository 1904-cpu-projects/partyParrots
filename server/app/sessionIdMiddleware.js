const uuid = require('uuid/v4');

const middleware = (req, res, next) => {
  if (req.session && !req.session.id) {
    req.session.id = uuid();
  }
  next();
};

module.exports = middleware;
