const productsModel = require('../models/products.model');

const findAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const findProductById = async (id) => {
  const productById = await productsModel.findProductById(id);
  return { type: null, message: productById };
};

module.exports = {
  findAllProducts,
  findProductById,
};