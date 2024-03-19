const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const cars = require("./data/cars.json");
const route = require("./route");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(expressLayouts);
// app.use(express.static("views"));
app.use(express.static("public"));

app.use("/", route);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found",
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
