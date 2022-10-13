const productsService = require('../services/products.service');
const errorMap = require('../Utils/errorMap');

const findAllProducts = async (_req, res) => { 
  const { type, message } = await productsService.findAllProducts();
  if (type) return res.status(errorMap.mapError(type)).json({ message });  
    
  return res.status(200).json(message);
};

const findProductById = async (req, res) => {  
  const productId = req.params.id;
  const { type, message } = await productsService.findProductById(productId);
  if (type) return res.status(errorMap.mapError(type)).json({ message }); 
    
  return res.status(200).json(message);
};

const registerProduct = async (req, res) => {
  const data = req.body;
  const { type, message } = await productsService.registerProduct(data);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  findAllProducts,
  findProductById,
  registerProduct,
};