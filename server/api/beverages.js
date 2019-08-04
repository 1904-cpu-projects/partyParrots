const express = require('express');
const router = express.Router();
const { Beverage } = require('../db/beverage');

router.get('/', async(req, res, next) => {
  try {
    const beverages = await Beverage.findAll();
    res.send(beverages);
  }
  catch (err) {
    next(err);
  }
});


router.get('/:id',  async(req, res, next) => {
  if (req.isAdmin) {
    try {
      const beverage = await Beverage.findByPK(req.params.id)
      res.send(beverage);
    }
    catch (err) {
      next(err);
    }
  }
  else(res.status(410))
})

router.put('')



module.exports = router;
