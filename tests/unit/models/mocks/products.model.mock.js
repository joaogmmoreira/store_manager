const products = [{
    id: 1,
    name: 'Martelo do Thor'
  },
  {
    id: 2,
    name: 'Escudo do Capitão América'
  },
  {
  id: 3,
  name: 'Escudo do Capitão América'
  }];

  const resultProducts = [{
        id: 1,
        name: 'Martelo do Thor'
      },
      {
        id: 2,
        name: 'Escudo do Capitão América'
      },
      {
        id: 3,
        name: 'Escudo do Capitão América'
      }];

const singleProduct = [{
  id: 1,
  name: 'Martelo do Thor'
}];

const singleProductResult = {
  id: 1,
  name: 'Martelo do Thor'
};

module.exports = {
  products,
  resultProducts,
  singleProduct,
  singleProductResult,
}