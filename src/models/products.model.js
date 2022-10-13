const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  // console.log(result);
  return result;
};

const findProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  // console.log(result);
  return result;
};

const registerProduct = async (data) => {
  const columns = Object.keys(data).map((key) => `${key}`).join(', ');
  const placeholders = Object.keys(data).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection
    .execute(`INSERT INTO StoreManager.products (${columns}) 
    VALUE (${placeholders})`, [...Object.values(data)]);
  
  return insertId;
};

module.exports = {
  findAllProducts,
  findProductById,
  registerProduct,
};