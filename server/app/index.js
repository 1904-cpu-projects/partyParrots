const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const sessionMiddleware = require('./sessionMiddlewarare');
const serializeUserMiddleware = require('./serializeUserMiddleware');

const staticPath = path.join(__dirname, '..', '..', 'public');
const bulmaPath = path.join(
  __dirname,
  '..',
  '..',
  'node_modules',
  'bulma',
  'css'
);

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(sessionMiddleware);
app.use(serializeUserMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticPath));
app.use('/bulma', express.static(bulmaPath));

app.get('/hello', (req, res) => res.send('hi!'));

module.exports = app;
