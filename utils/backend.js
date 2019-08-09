// Designed for use in user model
class AuthError extends Error {
  constructor(message, subtype) {
    super(message);
    this.type = 'Auth';
    this.subtype = subtype || 'Error';
    this.status = 401;
  }
}

const isAdminMiddleware = (req, res, next) => {
  if (!req.isAdmin) {
    res.sendStatus(401);
  } else {
    next();
  }
};

module.exports = {
  isAdminMiddleware,
  AuthError,
};
