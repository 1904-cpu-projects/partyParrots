const express = require('express');
const router = express.Router();

router.use('/beverages', require('./beverages'));

module.exports = router;
