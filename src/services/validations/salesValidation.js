const { findProductById } = require('../../models/products.model');

const salesValidation = (data) => {
  const isProductId = data.every(({ productId }) => productId);
  const isQuantity = data.every(({ quantity }) => {
    if (quantity === 0) {
      return true;
    }
    return quantity;
  });
  const minQuantity = data.every(({ quantity }) => quantity >= 1);
  
  if (!isProductId) {
    return { type: 'PRODUCTID_IS_REQUIRED', message: '"productId" is required' };
  }
  if (!isQuantity) {
    return { type: 'QUANTITY_IS_REQUIRED', message: '"quantity" is required' };
  }
  if (!minQuantity) {
    return { type: 'QUANTITY_TOO_LOW', message: '"quantity" must be greater than or equal to 1' };
  }
  
  return { type: null, message: '' };
};

const validateId = async (data) => {
  const result = data.map(async ({ productId }) => {   
    if (productId) {
      const isProduct = await findProductById(productId);
      if (isProduct) {
        return true;
      }
      return false;
    }
  });
  const promises = await Promise.all(result);
  const isTrue = promises.every((element) => element);
  
  return isTrue;
};

module.exports = {
  salesValidation,
  validateId,
};
