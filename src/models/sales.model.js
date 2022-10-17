const connection = require('./connection');

const registerSaleId = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

const registerSales = async (data, newSaleId) => {
  const [{ insertId }] = await connection
    .execute(`INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
    VALUE(?, ?, ?)`, [newSaleId, data.productId, data.quantity]); 

  return insertId;
};

const findAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id AS saleId, date, product_id AS productId, quantity 
    FROM StoreManager.sales_products AS pro
    INNER JOIN StoreManager.sales AS sal
    ON sal.id = pro.sale_id
    ORDER BY sale_id, product_id`,
  );
  // console.log(result);
  return result;
};

const findSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id AS productId, quantity 
    FROM StoreManager.sales_products AS pro
    INNER JOIN StoreManager.sales AS sal
    ON sal.id = pro.sale_id
    WHERE pro.sale_id = ?
    ORDER BY sale_id, product_id`, [id],
  );
  console.log(result);
  return result;
};

module.exports = {
  registerSaleId,
  registerSales,
  findAllSales,
  findSaleById,
};