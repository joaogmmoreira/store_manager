// const { findAllProducts } = require('../../models/products.model');

const salesValidation = (data) => {
  const isProductId = data.some((element) => element.productId === undefined);
  const isQuantity = data.some((element) => element.quantity === undefined);
  const minQuantity = data.some((element) => element.quantity < 1);

  // const allProducts = await findAllProducts();
  // console.log(allProducts, 'oi');
  
  if (isProductId) {
    return { type: 'PRODUCTID_IS_REQUIRED', message: '"productId" is required' };
  }
  if (isQuantity) {
    return { type: 'QUANTITY_IS_REQUIRED', message: '"quantity" is required' };
  }
  if (minQuantity) {
    return { type: 'QUANTITY_TOO_LOW', message: '"quantity" must be greater than or equal to 1' };
  }
  
  return { type: null, message: '' };
};

module.exports = {
  salesValidation,
  // checkProductId,
};