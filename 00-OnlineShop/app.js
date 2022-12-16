const path = require("path");

const express = require("express");
//CSURF
const csrf = require('csurf');

const db = require("./data/database");
//CSURF MIDDLEWARE TOKEN
const addCsrfTokenMiddleware = require('./middlewares/csrf-token')
// ./ bulunduğumuz konuma bakıyor
const authRoutes = require("./routes/auth.routes");

const app = express();

//ejs engine motor
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Static files
app.use(express.static("public"));
//Url verilerini almak için eklmemiz gerekli
app.use(express.urlencoded({ extended: false }));

//CSURF MIDDLEWARE
app.use(csrf());
app.use(addCsrfTokenMiddleware);

app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
    console.log("Server is up!!");
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
