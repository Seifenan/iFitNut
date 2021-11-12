const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(` now Listening `);
});
