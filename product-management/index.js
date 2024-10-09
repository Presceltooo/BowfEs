const express = require('express');

const route = require("./routes/client/index.route");

const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

// routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000/`)
});

