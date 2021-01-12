const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');
const ProductsContorller = require('../controllers/ProductsController');
const CategoriesController = require('../controllers/CategoriesController');
const StatusesController = require('../controllers/StatusesController');
const OrdersController = require('../controllers/OrdersController');


router.get('/', IndexController.home);

router.get('/products', ProductsContorller.getAll);
router.get('/products/:id', ProductsContorller.getById);
router.post('/products', ProductsContorller.store);
router.put('/products', ProductsContorller.updateById);

router.get('/categories', CategoriesController.getAll);

router.get('/status', StatusesController.getAll);

router.get('/orders', OrdersController.getAll);
router.get('/orders/status/:id', OrdersController.getAllByStatus);
router.post('/orders', OrdersController.store);
router.put('/orders/:id/:status', OrdersController.update);


module.exports = router;
