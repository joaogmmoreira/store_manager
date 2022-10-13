const productsService = require('../services/products.service');

const findAllProducts = async (_req, res) => { 
  const { type, message } = await productsService.findAllProducts();
  if (type) {
    return res.status(404).json({ message: 'deu ruim' });
  }
    
  return res.status(200).json(message);
};

const findProductById = async (req, res) => {  
  const productId = req.params.id;
  const { type, message } = await productsService.findProductById(productId);
  if (type) {
    return res.status(404).json({ message: 'Product not found' });
  }    
    
  return res.status(200).json(message);
};

module.exports = {
  findAllProducts,
  findProductById,
};