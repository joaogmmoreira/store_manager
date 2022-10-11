const productsModel = require('../models/products.model');

const findAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

module.exports = {
  findAllProducts,
};