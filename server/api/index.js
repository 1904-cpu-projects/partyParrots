const express = require('express');
const router = express.Router();

router.use('/beverages', require('./beverages'));
router.use('/orderItems', require('./orderItems'));
router.use('/users', require('./users'))

module.exports = router;
