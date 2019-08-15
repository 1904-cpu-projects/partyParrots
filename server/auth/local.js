const router = require('express').Router();
const { User, Order } = require('../db/index');
const { findGuestCartMiddleware } = require('../../utils/backend');

router.post(
  '/signup',
  findGuestCartMiddleware(Order),
  async (req, res, next) => {
    try {
      const user = await User.signup(req.body);
      req.session.userId = user.id;

      if (req.guestCart) {
        await req.guestCart.setUser(user);
      }

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/login', findGuestCartMiddleware(Order), async (req, res, next) => {
  try {
    const user = await User.login(req.body.email, req.body.password);
    req.session.userId = user.id;

    if (req.guestCart) {
      await req.guestCart.setUserOrMerge(user);
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  if (error.type === 'Auth') {
    res
      .status(error.status)
      .json({ error: { [error.subtype]: error.message } });
  } else {
    next(error);
  }
});

module.exports = router;
