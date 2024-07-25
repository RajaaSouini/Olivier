const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "html");

app.set("views", path.join(__dirname, ""));

app.use(express.static(path.join(__dirname, "")));

app.get("/", (req, res) => {

  res.render("index", data);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
