const { expect } = require('chai');
const sinon = require('sinon');
const productsModel  = require('../../../src/models/products.model');
const connection = require('../../../src/models/connection');
const { products,
  resultProducts,
  singleProductResult,
singleProduct } = require('./mocks/products.model.mock');

describe('Tests product model', () => {
  describe('Unit tests product model', () => {
    afterEach(sinon.restore);
    it('search for all products', async () => {      
      sinon.stub(connection, 'execute').resolves([products]);
      const data = await productsModel.findAllProducts();
      expect(data).to.be.deep.equal(resultProducts);
    });
    it('search for a single product', async () => {
      sinon.stub(connection, 'execute').resolves([singleProduct])
      const data = await productsModel.findProductById();
      expect(data).to.be.deep.equal(singleProductResult);
    });
  });
});
