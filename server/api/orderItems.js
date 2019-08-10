const router = require('express').Router();
const { Order, OrderItem, Beverage } = require('../db/index');

// make updates to other models... Bev (quantity)

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
    (req.method === 'GET' && req.route.path === '/api/orderItems/')
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
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const item = await OrderItem.findOne({ where: { id: req.params.id } });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { beverageId, purchasePrice, quantity } = req.body;
    const [item, created] = await OrderItem.findOrCreate({
      where: { orderId: req.orderId, beverageId },
      defaults: { purchasePrice, quantity },
    });

    if (created) {
      res.json(item);
    } else {
      res.sendStatus(400);
    }
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
    const updatedItem = await req.item.update({ quantity: req.body.quantity });
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', itemExistsMiddleware, async (req, res, next) => {
  try {
    await req.item.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
