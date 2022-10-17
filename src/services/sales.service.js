const salesModel = require('../models/sales.model');
const validate = require('./validations/salesValidation');

const registerSales = async (data) => {
  const validation = validate.salesValidation(data);
  const validateId = await validate.validateId(data);
  console.log(validation);

  if (validation.type) return validation;
  
  if (!validateId) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const newSaleId = await salesModel.registerSaleId();

  await Promise.all(data
    .map(async (element) => 
      salesModel.registerSales(element, newSaleId)));

  return { type: null,
    message: {
      id: newSaleId, itemsSold: data,
  } };
};

const findAllSales = async () => {
  const sales = await salesModel.findAllSales();
  
  return { type: null, message: sales };
};

const findSaleById = async (id) => {
  const saleById = await salesModel.findSaleById(id);
  if (saleById.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  
  return { type: null, message: saleById };
};

module.exports = {
  registerSales,
  findAllSales,
  findSaleById,
};
