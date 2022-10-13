const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  // console.log(result);
  return result;
};

const findProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  // console.log(result);
  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
};