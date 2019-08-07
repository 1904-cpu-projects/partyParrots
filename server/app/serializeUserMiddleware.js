const { User } = require('../db/index');

const superHighTechCache = {};

const removeCachedUser = id => {
  if (superHighTechCache[id]) {
    delete superHighTechCache[id];
  }
};

const serializeUserMiddleware = async (request, response, next) => {
  try {
    const id = request.session.userId;
    if (id) {
      let user;

      if (superHighTechCache[id] && superHighTechCache[id].id) {
        user = superHighTechCache[id];
      } else {
        user = await User.findOne({
          where: { id: request.session.userId },
        });
        superHighTechCache[user.id] = user;
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
