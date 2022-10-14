const salesModel = require('../models/sales.model');
const validate = require('./validations/salesValidation');

const registerSales = async (data) => {
  const validation = validate.salesValidation(data);

  if (validation.type) {
    return validation;
  }

  const newSaleId = await salesModel.registerSaleId();

  await Promise.all(data
    .map(async (element) => 
      // console.log(element);
       salesModel.registerSales(element, newSaleId)));
// console.log(oi);

  return {
    type: null,
    message: {
      id: newSaleId,
      ...data,
  } };
};

module.exports = {
  registerSales,
};
