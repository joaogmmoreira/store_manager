const camelize = require('camelize');
const connection = require('./connection');

const findAllProducts = async () => {
  const result = await connection.execute(
    'SELECT * FROM products',
  );
  console.log(result);
  return camelize(result);
};

module.exports = {
  findAllProducts,
};