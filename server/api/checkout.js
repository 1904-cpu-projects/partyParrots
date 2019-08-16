const express = require('express');
const router = express.Router();
const { Address } = require('../db/index');

router.get('/', async(req, res, next) => {
  try {
    console.log(req.user.id)
    res.send(req.user.id);
  }
  catch (err) {
    next(err);
  }
});

router.put('/', async(req, res, next) => {
  try {
    await Address.create(req.body)
    console.log('put route!', req.body)

    res.sendStatus(200);
  }
  catch (err) {
    next(err);
  }
})

module.exports = router;
