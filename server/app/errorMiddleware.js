const parseErrors = require('../../utils/parseErrors/index');

const middleware = (e, req, res, next) => {
  if (
    e.name === 'SequelizeValidationError' ||
    e.name === 'SequelizeUniqueConstraintError'
  ) {
    res.json(parseErrors(e.errors));
    return;
  }
  next(e);
};

module.exports = middleware;
