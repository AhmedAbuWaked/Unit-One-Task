const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(require('./app/routes'));

const port = 5000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});