const connection = require('./connection');

const registerSaleId = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

const registerSales = async (data, newSaleId) => {
  // console.log(data);
  console.log(newSaleId);
  const [{ insertId }] = await connection
    .execute(`INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
    VALUE(?, ?, ?)`, [newSaleId, data.productId, data.quantity]);  
  
  console.log(insertId, 'oi');

  return insertId;
};

module.exports = {
  registerSaleId,
  registerSales,
};