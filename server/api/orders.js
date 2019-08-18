const router = require('express').Router();
const { Order, OrderItem, Beverage } = require('../db/index');
const { isLoggedInMiddleware } = require('../../utils/backend');

router.use('/checkout', require('./checkout'));

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

module.exports = router;
