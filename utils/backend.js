// Designed for use in user model
class AuthError extends Error {
  constructor(message, subtype) {
    super(message);
    this.type = 'Auth';
    this.subtype = subtype || 'Error';
    this.status = 401;
  }
}

module.exports = {
  AuthError,
};
