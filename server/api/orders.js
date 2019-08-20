const router = require('express').Router();
const { Order, OrderItem, Beverage, User, Address } = require('../db/index');
const { isLoggedInMiddleware } = require('../../utils/backend');

router.get('/', isLoggedInMiddleware, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id, purchased: true },
    });
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

router.get('/:id/items', isLoggedInMiddleware, async (req, res, next) => {
  try {
    const items = await OrderItem.findAll({
      where: { orderId: req.params.id },
      include: [{ model: Beverage }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.put(
  '/checkout',
  async (req, _, next) => {
    try {
      let order;

      if (req.user) {
        const _order = await Order.findOne({
          where: { userId: req.user.id, purchased: false },
        });
        order = _order;
      } else {
        const _order = await Order.findOne({
          where: { sessionId: req.session.id, purchased: false },
        });
        order = _order;
      }

      req.order = order;
      next();
    } catch (error) {
      next(error);
    }
  },
  async (req, res, next) => {
    try {
      const { phone, address1, address2, city, state, zip } = req.body;

      const newAddress = await Address.create({
        phone,
        address1,
        address2,
        city,
        state,
        zip,
      });

      const orderPromise = req.order.update({
        purchased: true,
        addressId: newAddress.id,
      });

      if (req.user) {
        await Promise.all([
          User.update(
            { addressId: newAddress.id },
            {
              where: { id: req.user.id },
            }
          ),
          orderPromise,
        ]);
      } else {
        await orderPromise;
      }

      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
