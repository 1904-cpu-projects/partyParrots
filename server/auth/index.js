const router = require('express').Router();
const { removeCachedUser } = require('../app/serializeUserMiddleware');

router.use('/local', require('./local'));

router.get('/me', (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
});

router.delete('/logout', (req, res, next) => {
  if (req.session) {
    let id;
    if (req.session.userId) {
      id = req.session.userId;
    }

    req.session.destroy(err => {
      if (err) {
        next(err);
      } else {
        id && removeCachedUser(id);
        res.sendStatus(204);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
