const express = require("express");
const multer = require("multer");

const db = require("../data/database");

//Multer resim kaydetmesi için
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storageConfig });

const router = express.Router();

router.get("/", async function (req, res) {
  const users = await db.getDb().collection("users").find().toArray();
  res.render("profiles", { users: users });
});

router.get("/new-user", function (req, res) {
  res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
  const uploadedImageFile = req.file;
  const userData = req.body;

  //Çalışıyor mu diye ayrıca gelen parametreleri gördük
  // console.log(uploadedImageFile);
  // console.log(userData);

  await db.getDb().collection("users").insertOne({
    name: userData.username,
    imagePath: uploadedImageFile.path,
  });

  res.redirect("/");
});

module.exports = router;
