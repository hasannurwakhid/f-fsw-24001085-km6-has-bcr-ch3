const carUsecase = require("../usecase/car");
const path = require("path");

exports.tampilHalaman = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "sewa-mobil.html"));
};

exports.searchCar = (req, res) => {
  const data = carUsecase.searchCars(req);

  res.render("sewa-mobil", { cars: data });

  // const response = {
  //   data: data,
  //   message: null,
  // };

  // res.status(200).json(response);
};
