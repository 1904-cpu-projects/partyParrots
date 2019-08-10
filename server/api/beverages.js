const express = require('express');
const router = express.Router();
const { Beverage } = require('../db/index');
const { BeverageCategories } = require('../../utils/index');
const { isAdminMiddleware } = require('../../utils/backend');

// turn categories into a dictionary for quicker lookup
const categories = BeverageCategories.reduce((dict, cat) => {
  dict[cat] = true;
  return dict;
}, {});

router.use((req, res, next) => {
  const method = req.method;
  if (method === 'POST' || method === 'PUT') {
    const { body } = req;

    req.payload = {
      name: body.name,
      manufacturer: body.manufacturer,
      percentAlcohol: body.percentAlcohol,
      description: body.description,
      category: body.category,
      price: body.price,
      size: body.size,
      quantity: body.quantity,
    };

    if (body.imageURL) {
      req.payload.imageURL = body.imageURL;
    }
  }
  next();
});

router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query;
    let beverages;

    if (category && categories[category]) {
      beverages = await Beverage.findAll({
        where: { category },
      });
    } else {
      beverages = await Beverage.findAll();
    }

    res.json(beverages);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const beverage = await Beverage.findOne({ where: { id: req.params.id } });
    res.send(beverage);
  } catch (err) {
    next(err);
  }
});

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const newBeverage = await Beverage.create(req.payload);
    res.status(201).json(newBeverage);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const [_, updateBeverage] = await Beverage.update(req.payload, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    res.json(updateBeverage);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    await Beverage.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
