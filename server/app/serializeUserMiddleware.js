const { User } = require('../db/index');
const { Cache } = require('../../utils/index');

const cache = new Cache();
const removeCachedUser = cache.clear.bind(cache);

const serializeUserMiddleware = async (request, response, next) => {
  try {
    const id = request.session.userId;

    if (id) {
      let user;
      const cachedUser = cache.get(id);

      if (cachedUser && cachedUser.id) {
        user = cachedUser;
      } else {
        user = await User.findOne({
          where: { id: request.session.userId },
        });
        cache.set(user.id, user);
      }

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

module.exports = { serializeUserMiddleware, removeCachedUser };
