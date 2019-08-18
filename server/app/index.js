const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const sessionMiddleware = require('./sessionMiddlewarare');
const sessiodIdMiddleware = require('./sessionIdMiddleware');
const { serializeUserMiddleware } = require('./serializeUserMiddleware');
const erorrMiddleware = require('./errorMiddleware');

const staticPath = path.join(__dirname, '..', '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(sessionMiddleware);
app.use(sessiodIdMiddleware);
app.use(serializeUserMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticPath));

app.use('/auth', require('../auth/index'));
app.use('/api', require('../api/index.js'));

app.get('/hello', (req, res) => res.send('hi!'));

app.use(erorrMiddleware);

module.exports = app;
