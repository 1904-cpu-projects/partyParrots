const express = require('express');
const router = express.Router();
const { Beverage } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const beverages = await Beverage.findAll();
    res.send(beverages);
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

router.post('/', async (req, res, next) => {
  //allows only Admin to create new Beverages
  if (req.isAdmin) {
    try {
      const newBeverage = await Beverage.create(req.body);
      res.status(201).send(newBeverage);
    } catch (err) {
      next(err);
    }
  } else {
    res.status(401).send('Please login as an Administrator');
  }
});

router.put('/:id', async (req, res, next) => {
  if (req.isAdmin) {
    try {
      const [_, updateBeverage] = await Beverage.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      res.send(updateBeverage);
    } catch (err) {
      next(err);
    }
  } else {
    res.status(401).send('Please login as an Administrator');
  }
});

router.delete('/:id', async (req, res, next) => {
  if (req.isAdmin) {
    try {
      await Beverage.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send(`A beverage with the id of ${req.params.id} was destroyed`);
    } catch (err) {
      next(err);
    }
  } else {
    res.status(401).send('Please login as an Administrator');
  }
});

module.exports = router;
