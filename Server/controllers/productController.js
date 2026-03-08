const { getProducts, getProductById } = require('../services/productService');

exports.listProducts = async (req, res, next) => {
  try {
    const data = await getProducts(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.detailProduct = async (req, res, next) => {
  try {
    const product = await getProductById(req.params.id);
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};