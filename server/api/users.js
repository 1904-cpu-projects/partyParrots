const express = require('express');
const router = express.Router();
const { User } = require('../db/index');
const { isAdminMiddleware } = require('../../utils/backend');

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
   const users = await User.findAll();
   res.status(201).send(users);
  }
  catch (err) {
    next(err);
  }
});

router.get('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(201).send(user);
  }
  catch (err) {
    next (err)
  }
});

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204)
  }
  catch (err) {
    next(err)
  }
})


module.exports = router;
