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

module.exports = {
  correctAllProductsReturn,
  correctProductByIdReturn,
}