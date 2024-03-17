const express = require("express");
const cars = require("./data/cars.json");
const route = require("./route");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", route);

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
