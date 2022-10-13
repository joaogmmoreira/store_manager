const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const { correctAllProductsReturn,
  correctProductByIdReturn,
  noProductsReturn,
} = require('./mocks/products.controller.mock');


describe('Tests driver controller', () => {
  describe('Unit tests driver controller', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('search for all products', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'findAllProducts').resolves(correctAllProductsReturn);

      await productsController.findAllProducts(req, res);
      // console.log(res);
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
      // console.log(correctProductByIdReturn.message)
    })
    it('returns status 404 if it doesnt find any products at all', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'findAllProducts').resolves(noProductsReturn);

      await productsController.findAllProducts(req, res);
      // console.log(res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: noProductsReturn.message });
    })
    it('returns status 404 if doesnt find any products with the correct id', async () => {
      const req = { params: { id: 4 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'findProductById').resolves(noProductsReturn);

      await productsController.findProductById(req, res);
      // console.log(noProductsReturn.message);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: noProductsReturn.message });
    })
  });
})
