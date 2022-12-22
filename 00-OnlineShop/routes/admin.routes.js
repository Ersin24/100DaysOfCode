const express = require("express");

const adminController = require("../controllers/admin.controller");
imageUploadMiddleware = require("../middlewares/image-upload");

const router = express.Router();

router.get("/products", adminController.getProducts); // /admin/products diyoruz aslında app.js sayesinde

router.get("/products/new", adminController.getNewProducts);

router.post('/products', imageUploadMiddleware, adminController.createNewProduct)

module.exports = router;
