const express = require('express');
require("dotenv").config()

const route = require("./routes/client/index.route");

const app = express();
const port = process.env.PORT;
// đã học 22p

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

// routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000/`)
});


