const router = require('express').Router();

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

module.exports = router;
