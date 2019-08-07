// Designed for use in user model
const authError = (msg = 'Error', subtype = 'Error') => {
  const error = new Error(msg);
  error.type = 'Auth';
  error.subtype = subtype;
  error.status = 401;
  return error;
};

const isAdminMiddleware = (req, res, next) => {
  if (!req.isAdmin) {
    res.sendStatus(401);
  } else {
    next();
  }
};

module.exports = {
  authError,
  isAdminMiddleware,
};
