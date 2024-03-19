const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

/* Add routes */
// /cars
router.get("/", carController.getCars);
router.get("/:id", carController.getCar);
router.post("/", carController.postCar);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;
