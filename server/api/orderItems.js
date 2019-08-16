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
    if (req.user) {
      const userId = req.user.id;
      const [order] = await Order.findOrCreate({
        where: { userId, purchased: false },
      });
      req.orderId = order.id;
    } else {
      const sessionId = req.session.id;
      const [order] = await Order.findOrCreate({
        where: { sessionId, purchased: false },
      });
      req.orderId = order.id;
    }
  }
  next();
});

router.get('/', async (req, res, next) => {
  try {
    const items = await OrderItem.findAll({
      where: { orderId: req.orderId },
      include: [{ model: Beverage }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const item = await OrderItem.findOne({
      where: { id: req.params.id },
      include: [{ model: Beverage }],
    });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { beverageId, purchasePrice, quantity } = req.body;
    const { orderId } = req;

    const existingItem = await OrderItem.findOne({
      where: { orderId, beverageId },
    });

    if (existingItem) {
      await existingItem.reload({ include: [{ model: Beverage }] });
      return res.status(400).json(existingItem);
    }

    await Beverage.updateQuantity(beverageId, 'subtract', quantity);

    const item = await OrderItem.create({
      purchasePrice,
      quantity,
      orderId,
      beverageId,
    });

    await item.reload({ include: [{ model: Beverage }] });

    res.json(item);
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
    if (req.body.quantity === 0) {
      await Beverage.updateQuantity(
        req.item.beverageId,
        'add',
        req.item.quantity
      );

      await req.item.destroy();

      res.sendStatus(204);
      return;
    }

    const difference = req.body.quantity - req.item.quantity;

    if (difference === 0) {
      res.sendStatus(400);
    }

    await Beverage.updateQuantity(
      req.item.beverageId,
      difference > 0 ? 'subtract' : 'add',
      Math.abs(difference)
    );

    const item = await req.item.update({ quantity: req.body.quantity });

    await item.reload({
      include: [{ model: Beverage }],
    });

    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', itemExistsMiddleware, async (req, res, next) => {
  try {
    await Beverage.updateQuantity(
      req.item.beverageId,
      'add',
      req.item.quantity
    );

    await req.item.destroy();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.use(async (err, req, res, next) => {
  if (err.type === 'Quantity') {
    const beverage = await Beverage.findOne({ where: { id: err.beverageId } });
    res.status(err.status).json(beverage);
  } else {
    next(err);
  }
});

module.exports = router;
