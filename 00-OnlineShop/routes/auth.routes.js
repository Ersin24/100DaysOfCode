const express = require("express");
//Controllerdeki dosyayı çağırıyoruz. ../ bize bir üst klasörü gösteriyor
const authController = require("../controllers/auth.controller");

const router = express.Router();

//Yolları yaptığımızda function burda tanımlamıyoruz contrellers'de tanımlıyourz
router.get("/signup", authController.getSignup);

router.post("/signup", authController.signup);

router.get("/login", authController.getLogin);

router.post("/login", authController.login);

module.exports = router;
