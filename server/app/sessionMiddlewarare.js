const session = require('session');
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
  secret: process.env.SECRET || 'bad secret',
  name: 'sid',
  store,
  resave: false,
  saveUninitialized: true,
});

module.exports = middleware;
