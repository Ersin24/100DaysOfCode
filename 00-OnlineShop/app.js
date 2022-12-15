const path = require("path");
const express = require("express");
// ./ bulunduğumuz konuma bakıyor
const authRoutes = require("./routes/auth.routes");

const app = express();

//ejs engine motor
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Static files
app.use(express.static('public'))

app.use(authRoutes);

app.listen(3000);
