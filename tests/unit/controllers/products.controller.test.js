const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const { correctAllProductsReturn,
  correctProductByIdReturn,
} = require('./mocks/products.controller.mock');


describe('Tests driver controller', () => {
  describe('Unit tests driver controller', () => {
    it('search for all products', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'findAllProducts').resolves(correctAllProductsReturn);

      await productsController.findAllProducts(req, res);
      console.log(res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(correctAllProductsReturn.message);
    });
    it('search product by id', async () => {
      const req = { params: { id: 1 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'findProductById').resolves(correctProductByIdReturn);

      await productsController.findProductById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(correctProductByIdReturn.message);
    })
  });
})
