const router = require('express').Router();
const { Order, OrderItem, Beverage } = require('../db/index');

const itemExistsMiddleware = (req, res, next) => {
  if (!req.item) {
    res.sendStatus(400);
  } else {
    next();
  }
};

router.use(async (req, res, next) => {
  if (
    req.method === 'POST' ||
    (req.method === 'GET' && req.originalUrl === '/api/orderItems/')
  ) {
    const userId = req.user.id;
    const [order] = await Order.findOrCreate({
      where: { userId, purchased: false },
    });
    req.orderId = order.id;
  }
  next();
});

router.get('/', async (req, res, next) => {
  try {
    const items = await OrderItem.findAll({
      where: { orderId: req.orderId },
    });
    res.json({ items });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const item = await OrderItem.findOne({ where: { id: req.params.id } });
    res.json({ item });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { beverageId, purchasePrice, quantity } = req.body;
    const { orderId } = req;

    const existingItem = await Beverage.findOne({
      where: { orderId, beverageId },
    });

    if (existingItem) {
      res.sendStatus(400);
    }

    const beverage = await Beverage.updateQuantity(
      beverageId,
      'subtract',
      quantity
    );

    const item = await OrderItem.create({
      purchasePrice,
      quantity,
      orderId,
      beverageId,
    });

    res.json({ item, beverage });
  } catch (error) {
    next(error);
  }
});

router.param('id', async (req, res, next, id) => {
  try {
    const item = await OrderItem.findOne({ where: { id } });
    req.item = item ? item : null;
    next();
  } catch (error) {
    next(error);
  }
});

router.put('/:id', itemExistsMiddleware, async (req, res, next) => {
  try {
    const difference = req.body.quantity - req.item.quantity;

    if (difference === 0) {
      res.sendStatus(400);
    }

    const beverage = await Beverage.updateQuantity(
      req.item.beverageId,
      difference > 0 ? 'subtract' : 'add',
      Math.abs(difference)
    );

    const item = await req.item.update({ quantity: req.body.quantity });

    res.json({ item, beverage });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', itemExistsMiddleware, async (req, res, next) => {
  try {
    const beverage = await Beverage.updateQuantity(
      req.item.beverageId,
      'add',
      req.item.quantity
    );

    await req.item.destroy();

    res.status(204).json({ beverage });
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => {
  if (err.type === 'Quantity') {
    return res.status(err.status).json({ [err.beverageId]: err.quantity });
  }
  next();
});

module.exports = router;
