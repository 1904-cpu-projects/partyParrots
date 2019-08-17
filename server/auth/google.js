const router = require('express').Router();
const qs = require('querystring');
const Axios = require('axios');

const { User, Order } = require('../db/index');
const { findGuestCartMiddleware } = require('../../utils/backend');

const redirect_uri = 'http://localhost:3000/auth/google/callback';
const emailScope = 'https://www.googleapis.com/auth/userinfo.email';
const userScope = 'https://www.googleapis.com/auth/userinfo.profile';

router.get(
  '/callback',
  findGuestCartMiddleware(Order),
  async (req, res, next) => {
    try {
      const { data } = await Axios.post(
        'https://www.googleapis.com/oauth2/v4/token',
        {
          code: req.query.code,
          client_id: process.env.GOOG_CLIENT_ID,
          client_secret: process.env.GOOG_AUTH_KEY,
          grant_type: 'authorization_code',
          redirect_uri,
        }
      );

      const { data: _user } = await Axios.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );

      const values = {
        googleId: _user.id,
        email: _user.email,
        firstName: _user.given_name,
        lastName: _user.family_name,
      };

      if (_user.picture) {
        values.imageURL = _user.picture;
      }

      const [user] = await User.upsert(values, {
        returning: true,
      });
      req.session.userId = user.id;

      if (req.guestCart) {
        await req.guestCart.setUserOrMerge(user);
      }

      if (req.session.destination) {
        res.redirect(`/#/${req.session.destination}`);
      } else {
        res.redirect('/#/products');
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:destination', (req, res) => {
  req.session.destination = req.params.destination
    ? req.params.destination
    : null;

  res.redirect('/auth/google');
});

router.get('/', (req, res) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?${qs.stringify({
    response_type: 'code',
    scope: `${emailScope} ${userScope}`,
    redirect_uri,
    client_id: process.env.GOOG_CLIENT_ID,
  })}`;

  res.redirect(url);
});

module.exports = router;
