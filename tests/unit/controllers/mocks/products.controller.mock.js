const correctAllProductsReturn = ({
  type: null,
  message: [
    {
      id: 1,
      name: "Martelo de Thor"
    },
    {
      id: 2,
      name: "Traje de encolhimento"
    },
    {
      id: 3,
      name: "Escudo do Capitão América"
    }
  ]
});

const correctProductByIdReturn = ({
  type: null,
  message: [
    {
      id: 1,
      name: "Martelo de Thor"
    }
  ]
});

const noProductsReturn = ({
  type: 'PRODUCT_NOT_FOUND',
  message: 'Product not found'
});

const registeredProduct = ({
  type: null,
  message: [{
    id: 4,
    name: 'capa do batman'
  }]
})

module.exports = {
  correctAllProductsReturn,
  correctProductByIdReturn,
  noProductsReturn,
  registeredProduct,
}