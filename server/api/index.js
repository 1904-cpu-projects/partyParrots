const express = require('express');
const router = express.Router();

router.use('/beverages', require('./beverages'));
router.use('/orderItems', require('./orderItems'));
router.use('/users', require('./users'));
router.use('/orders/checkout', require('./checkout'));

module.exports = router;
