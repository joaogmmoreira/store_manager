const salesService = require('../services/sales.service');
const errorMap = require('../Utils/errorMap');

const registerSales = async (req, res) => { 
  const data = req.body;
  const result = await salesService.registerSales(data);

  if (result.type) {
    return res.status(errorMap.mapError(result.type)).json({ message: result.message });
  }

  return res.status(201).json(result.message);  
};

const findAllSales = async (_req, res) => {
  const { type, message } = await salesService.findAllSales();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
    
  return res.status(200).json(message);
};

const findSaleById = async (req, res) => {
  const saleId = req.params.id;
  const { type, message } = await salesService.findSaleById(saleId);
  if (type) return res.status(errorMap.mapError(type)).json({ message }); 
    
  return res.status(200).json(message);
};

module.exports = {
  registerSales,
  findAllSales,
  findSaleById,
};