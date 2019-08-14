const session = require('express-session');
const createSessionStore = require('connect-session-sequelize');
const { db } = require('../db/index');

const SessionStore = createSessionStore(session.Store);

function extendDefaultFields(defaults, _session) {
  return {
    data: defaults.data,
    expires: defaults.expires,
    userId: _session.userId,
  };
}

const store = new SessionStore({
  db,
  table: 'session',
  extendDefaultFields,
});

const middleware = session({
  store,
  secret: process.env.SECRET || 'bad secret',
  name: process.env.NAME || 'sid',
  resave: false,
  saveUninitialized: true,
});

module.exports = middleware;
