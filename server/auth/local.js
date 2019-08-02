const router = require('express').Router();
const { User } = require('../db/index');

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.signup(req.body);
    req.session.userId = user.id;
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.login(req.body.email, req.body.password);
    req.session.userId = user.id;
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        next(err);
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.use((error, req, res, next) => {
  if (error.type === 'Auth') {
    return res
      .sendStatus(error.status)
      .json({ [error.subtype]: error.message });
  }
  next(error);
});
