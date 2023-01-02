const express = require("express");

const cartController = require("../controllers/cart.controller");

const router = express.Router();

router.get("/", cartController.getCart);

router.post("/items", cartController.addCartItem); // /cart/items

router.patch("/items", cartController.updateCartItem); //Güncelleme yaparken patch kullanıyoruz

module.exports = router;
