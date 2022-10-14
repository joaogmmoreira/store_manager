const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/sales', salesController.registerSales);

module.exports = router;