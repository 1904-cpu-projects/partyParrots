class AuthError extends Error {
  constructor(message, subtype) {
    super(message);
    this.type = 'Auth';
    this.subtype = subtype || 'Error';
    this.status = 401;
  }
}

class QuantityError extends Error {
  constructor(bevId, quant) {
    super();
    this.type = 'Quantity';
    this.status = 400;
    this.beverageId = bevId;
    this.quantity = quant;
  }
}

const isAdminMiddleware = (req, res, next) => {
  if (!req.isAdmin) {
    res.sendStatus(401);
  } else {
    next();
  }
};

const isLoggedInMiddleware = (req, res, next) => {
  if (req.user && req.user.id) {
    next();
  } else {
    res.sendStatus(401);
  }
};

const findGuestCartMiddleware = Order => async (req, _, next) => {
  try {
    const sessionId = req.session.id;
    if (sessionId) {
      const cart = await Order.findOne({ where: { sessionId } });
      req.guestCart = cart ? cart : null;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAdminMiddleware,
  isLoggedInMiddleware,
  findGuestCartMiddleware,
  AuthError,
  QuantityError,
};
