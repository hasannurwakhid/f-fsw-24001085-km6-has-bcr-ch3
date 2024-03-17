const express = require("express");
const router = express.Router();
const rentCarController = require("../controller/rent_car");



router.get("/", rentCarController.tampilHalaman);
router.post("/", rentCarController.searchCar);


module.exports = router;
