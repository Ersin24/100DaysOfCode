const path = require("path");

const express = require("express");
//CSURF
const csrf = require("csurf");
//Express sesssion paketi
const expressSession = require("express-session");

//Session
const createSessionConfig = require("./config/session");
//Database
const db = require("./data/database");
//CSURF MIDDLEWARE TOKEN
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
//Error middleware
const errorHandleMiddleware = require("./middlewares/error-handler");

const checkAuthStatusMiddleware = require("./middlewares/check-auth");

// ./ bulunduğumuz konuma bakıyor
const authRoutes = require("./routes/auth.routes");
const productsRoutes = require("./routes/products.routes");
const baseRoutes = require("./routes/base.routes");

const app = express();

//ejs engine motor
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Static files
app.use(express.static("public"));
//Url verilerini almak için eklmemiz gerekli
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

//Csurf öncesinde session kullanmamız gerekli
app.use(expressSession(sessionConfig));
//CSURF MIDDLEWARE
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware)

app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);

app.use(errorHandleMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
    console.log("Server is up!!");
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
