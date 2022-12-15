const express = require("express");
// ./ bulunduğumuz konuma bakıyor
const authRoutes = require('./routes/auth.routes')

const app = express();

app.use(authRoutes);

app.listen(3000);
