const express = require('express');
const router = express.Router();
const { isLoggedInMiddleware } = require('../../utils/backend');

router.use('/beverages', require('./beverages'));
router.use('/orderItems', isLoggedInMiddleware, require('./orderItems'));
router.use('/users', require('./users'))

module.exports = router;
