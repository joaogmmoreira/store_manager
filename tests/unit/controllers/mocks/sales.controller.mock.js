const correctAllSalesReturn = [
  {
    "saleId": 1,
    "date": "2022-10-17T19:28:54.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-10-17T19:28:54.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-10-17T19:28:54.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const correctSaleByIdReturn = [
  {
    "date": "2022-10-17T19:28:54.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-17T19:28:54.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const noSaleReturn = ({
  type: 'SALE_NOT_FOUND',
  message: 'SALE not found'
});

module.exports = {
  correctAllSalesReturn,
  correctSaleByIdReturn,
  noSaleReturn,
}