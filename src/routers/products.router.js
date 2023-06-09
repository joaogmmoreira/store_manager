const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products', productsController.findAllProducts);

router.get('/products/:id', productsController.findProductById);

router.post('/products', productsController.registerProduct);

module.exports = router;