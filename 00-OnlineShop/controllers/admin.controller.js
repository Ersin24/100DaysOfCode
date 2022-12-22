const Product = require("../models/product.model");

function getProducts(req, res) {
  res.render("admin/products/all-products");
}

function getNewProducts(req, res) {
  res.render("admin/products/new-product");
}

async function createNewProduct(req, res, next) {
  // console.log(req.body)
  // console.log(req.file)

  const product = new Product({
    ...req.body,
    image: req.file.filename,
  });

  try {
    await product.save();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect("/admin/products");
}

module.exports = {
  getProducts: getProducts,
  getNewProducts: getNewProducts,
  createNewProduct: createNewProduct,
};
