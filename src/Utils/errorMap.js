const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  NAME_IS_REQUIRED: 400,
  NAME_LENGTH: 422,
  PRODUCTID_IS_REQUIRED: 400,
  QUANTITY_IS_REQUIRED: 400,
  QUANTITY_TOO_LOW: 422,
  SALE_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};