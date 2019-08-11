const express = require('express');
const router = express.Router();
const { isLoggedInMiddleware } = require('../../utils/backend');

router.use('/beverages', require('./beverages'));
router.use('/orderItems', isLoggedInMiddleware, require('./orderItems'));

module.exports = router;
