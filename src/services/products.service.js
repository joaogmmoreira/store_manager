const productsModel = require('../models/products.model');
const validate = require('./validations/productValidation');

const findAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const findProductById = async (id) => {
  const productById = await productsModel.findProductById(id);
  if (!productById) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  return { type: null, message: productById };
};

const registerProduct = async (data) => {
  const validation = validate.registryProductValidation(data);
  if (validation.type) return validation;
  const insertedData = await productsModel.registerProduct(data);
  const result = await findProductById(insertedData);
  // console.log(result);

  return { type: null, message: result.message };
};

module.exports = {
  findAllProducts,
  findProductById,
  registerProduct,
};