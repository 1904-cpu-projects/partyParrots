const { User } = require('../db/index');

const middleware = async (request, response, next) => {
  try {
    if (request.session.userId) {
      const user = await User.findOne({
        where: { id: request.session.userId },
      });
      request.user = user;
      if (user.isAdmin) {
        request.isAdmin = true;
      }
    }
    next();
  } catch (e) {
    next();
  }
};

module.exports = middleware;
