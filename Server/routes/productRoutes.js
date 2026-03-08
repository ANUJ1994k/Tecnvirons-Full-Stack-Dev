const express = require('express');
const { listProducts, detailProduct } = require('../controllers/productController');

const router = express.Router();

router.get('/', listProducts);
router.get('/:id', detailProduct);

module.exports = router;