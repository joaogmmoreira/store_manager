const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);

const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');
const { correctAllSalesReturn,
  correctSaleByIdReturn,
  noSaleReturn
} = require('./mocks/sales.controller.mock')


describe('Tests sales controller', () => {
  describe('Unit tests sales controller', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('search for all sales', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findAllSales').resolves(correctAllSalesReturn);

      await salesController.findAllSales(req, res);
      
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(correctAllSalesReturn.message);
    });
    it('search sale by id', async () => {
      const req = { params: { id: 1 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findSaleById').resolves(correctSaleByIdReturn);

      await salesController.findSaleById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(correctSaleByIdReturn.message);
    })
    it('returns status 404 if it doesnt find any sale at all', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findAllSales').resolves(noSaleReturn);

      await salesController.findAllSales(req, res);
      // console.log(res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: noSaleReturn.message });
    })
    // it('returns status 404 if doesnt find any products with the correct id', async () => {
    //   const req = { params: { id: 4 } };
    //   const res = {};

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();

    //   sinon.stub(productsService, 'findProductById').resolves(noProductsReturn);

    //   await productsController.findProductById(req, res);
    //   // console.log(noProductsReturn.message);

    //   expect(res.status).to.have.been.calledWith(404);
    //   expect(res.json).to.have.been.calledWith({ message: noProductsReturn.message });
    // })
    // it('returns status 201 if the product is registered', async () => {
    //   const req = { body: { name: 'capa do batman' }};
    //   const res = {};

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();

    //   sinon.stub(productsService, 'registerProduct').resolves(registeredProduct);
    //   sinon.stub(productsService, 'findProductById').resolves(registeredProduct);

    //   await productsController.registerProduct(req, res);
    //   // console.log(noProductsReturn.message);

    //   expect(res.status).to.have.been.calledWith(201);
    //   expect(res.json).to.have.been.calledWith( registeredProduct.message );
    // })
  });
})
