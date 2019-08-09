const router = require('express').Router();
const { Order, OrderItem } = require('../db/index');

// get the order id for a user
router.use(async (req, res, next) => {
  const userId = req.user.id;
  const [order] = await Order.findOrCreate({
    where: { userId, purchased: false },
  });
  req.orderId = order.id;
  next();
});

// make payload
router.use((req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    req.payload = {
      beverageId: req.body.beverageId,
      purchasePrice: req.body.purchasePrice,
      quantity: req.body.quantity,
      orderId: req.orderId,
    };
  }
  next();
});

router.get('/', async (req, res, next) => {
  try {
    const { orderId } = req;
    const items = await OrderItem.findAll({
      where: { orderId },
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { orderId } = req;
    const item = await OrderItem.findOne({
      where: { orderId, id: req.params.id },
    });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { payload } = req.payload;
    const { orderId, beverageId, purchasePrice, quantity } = payload;

    const [item, created] = await OrderItem.findOrCreate({
      where: { orderId, beverageId },
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

router.param('beverageId', async (req, res, next, beverageId) => {
  try {
    const { orderId } = req;
    const item = await OrderItem.findOne({ where: { orderId, beverageId } });
    req.item = item ? item : null;
  } catch (error) {
    next(error);
  }
});

router.put(
  '/:beverageId',
  (req, res, next) => {
    if (!req.item) {
      res.sendStatus(400);
    } else {
      next();
    }
  },
  async (req, res, next) => {
    try {
      const { quantity } = req.payload;
      const updatedItem = await req.item.update({ quantity });
      res.json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:beverageId',
  (req, res, next) => {
    if (!req.item) {
      res.sendStatus(400);
    } else {
      next();
    }
  },
  async (req, res, next) => {
    try {
      await req.item.destroy();
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
