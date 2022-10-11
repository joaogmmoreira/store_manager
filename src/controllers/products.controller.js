const productsService = require('../services/products.service');

const findAllProducts = async (req, res) => { 
  const { type, message } = await productsService.findAllProducts();
  if (type) return res.status(200).json(message);   
};

// const findProductById = async (req, res) => {  
//   try {
//     const allProducts = await findAllProducts();
    
//     return res.status(200).json(allProducts);
//   } catch (error) {
//     return res.status(404).json({ message: 'Product not found' });
//   }
// };

module.exports = {
  findAllProducts,
};