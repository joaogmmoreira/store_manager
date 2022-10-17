const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.post('/sales', salesController.registerSales);

router.get('/sales', salesController.findAllSales);

router.get('/sales/:id', salesController.findSaleById);

module.exports = router;