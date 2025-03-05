const express = require('express');
const methodOverride = require('method-override')
require("dotenv").config();

const database = require('./config/database');

const systemConfig = require("./config/system");

const routeAdmin = require("./routes/admin/index.route");
const route = require("./routes/client/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

app.use(methodOverride('_method'));

app.set('views', './views');
app.set('view engine', 'pug');

// App local Variables
app.locals.prefixAdmin = systemConfig.preFixAdmin;

app.use(express.static('public'));

// routes
routeAdmin(app);
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000/`)
});
