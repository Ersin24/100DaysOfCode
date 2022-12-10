const express = require("express");
//Şifreleme için
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      email: "",
      confirmEmail: "",
      password: "",
    };
  }

  req.session.inputData = null;

  res.render("signup", { inputData: sessionInputData });
});

router.get('/login', function (req, res) {
  let sessionInputData = req.session.inputData;

  if (!sessionInputData) {
    sessionInputData = {
      hasError: false,
      email: '',
      password: '',
    };
  }

  req.session.inputData = null;
  res.render('login', { inputData: sessionInputData });
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email; // userData['email]
  const enteredConfirmEmail = userData["confirm-email"];
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredConfirmEmail ||
    !enteredPassword ||
    enteredPassword.trim() < 6 ||
    enteredEmail !== enteredConfirmEmail ||
    !enteredEmail.includes("@")
  ) {
    //Burada hata yapmış kullanıcının verilerini sıfırdan yazmasını istemiyoruz kullanıcı deneyimi açısından
    // console.log("Incorrect data");

    req.session.inputData = {
      hasError: true,
      message: "Could not log you in please check your credentials",
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
    };

    req.session.save(function () {
      res.redirect("/signup");
    });

    return;
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    req.session.inputData = {
      hasError: true,
      message: "User existss already!",
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
    };
    req.session.save(function () {
      res.redirect("/signup");
    });
    return;
  }

  //Aldığımız veriyi şifreliyoruz.
  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
    email: enteredEmail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  //Var olan kullanıcılar. Eğer yoksa null ya da undefined döndürür
  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (!existingUser) {
    req.session.inputData = {
      hasError: true,
      message: "Could not log you in - please check  your credentials",
      email: enteredEmail,
      password: enteredPassword,
    };
    req.session.save(function () {
      res.redirect("/login");
    });

    return;
  }

  //Parolaları karşılaştırıyoruz
  const passwordsAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password
  );

  //Parolalar eşit değilse
  if (!passwordsAreEqual) {
    req.session.inputData = {
      hasError: true,
      message: "User existss already!",
      email: enteredEmail,
      password: enteredPassword,
    };
    req.session.save(function () {
      res.redirect('/login');
    });
    return;
  }

  //Oturumuna veri ekliyoruz
  req.session.user = { id: existingUser._id, email: existingUser.email };
  req.session.isAuthenticated = true;
  req.session.save(function () {
    console.log("User is authenticated!");
    res.redirect("/profile");
  });
});
//Geliştirici altında application kısmında cookies leri görebiliriz.
//db.sessions.find() ile databasede verileri görebilirim. Mongodb session sayesinde verileri kaydediyor db ye
router.get("/admin", async function (req, res) {
  //Check the user "ticket"
  if (!req.session.isAuthenticated) {
    return res.status(401).render("401");
  }

  if (!res.locals.isAdmin) {
    return res.status(403).render('403');
  }

  res.render('admin');
});

router.get("/profile", function (req, res) {
  //Check the user "ticket"
  if (!res.locals.isAuth) {
    // if (!req.session.user)
    return res.status(401).render('401');
  }
  res.render('profile');
});

router.post("/logout", function (req, res) {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.redirect("/");
});

module.exports = router;
