const express = require("express");
const router = express.Router();

const carRoute = require("./car");
const rentCarRoute = require("./rent_car");
const homeRoute = require("./home");


// router.get("/", (req, res) => {
//   res.render("index", { layout: "layouts/main-layout" });
// });
router.get("/", homeRoute);

router.use("/cars", carRoute);
router.use("/rent-cars", rentCarRoute);

module.exports = router;
