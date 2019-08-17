const express = require('express');
const router = express.Router();
const { Address, User, Order } = require('../db/index');


router.put('/', async(req, res, next) => {
  try {
    const newAddress = await Address.create(req.body);
    await User.update({addressId: newAddress.id}, {
      where: {id: req.user.id}
    });
    await Order.update({purchased: true}, {
      where: {
        userId: req.user.id,
        purchased: false,
      }
    });

    res.sendStatus(200);
  }
  catch (err) {
    next(err);
  }
})

module.exports = router;
