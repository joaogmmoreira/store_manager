const salesService = require('../services/sales.service');
const errorMap = require('../Utils/errorMap');

const registerSales = async (req, res) => { 
  const data = req.body;
  const result = await salesService.registerSales(data);

  if (result.type) {
    return res.status(errorMap.mapError(result.type)).json({ message: result.message });
  }
  // console.log(result);

  return res.status(201).json(result.message);  
};

module.exports = {
  registerSales,
};