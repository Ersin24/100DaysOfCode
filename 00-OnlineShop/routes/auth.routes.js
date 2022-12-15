const express = require('express');
//Controllerdeki dosyayı çağırıyoruz. ../ bize bir üst klasörü gösteriyor
const authController = require('../controllers/auth.controller');

const router = express.Router();

//Yolları yaptığımızda function burda tanımlamıyoruz contrellers'de tanımlıyourz
router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);






module.exports = router;