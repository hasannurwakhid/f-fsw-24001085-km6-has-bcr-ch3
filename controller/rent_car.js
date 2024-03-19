const carUsecase = require("../usecase/car");
const path = require("path");

exports.tampilHalaman = (req, res) => {
  // res.sendFile(path.join(__dirname, "../views", "sewa-mobil.html"));
  res.render("sewa-mobil", { layout: "layouts/main-layout" });
};

exports.searchCar = (req, res) => {
  const data = carUsecase.searchCars(req);
  res.render("sewa-mobil", { cars: data, layout: "layouts/main-layout" });

  // const response = {
  //   data: data,
  //   message: null,
  // };

  // res.status(200).json(response);
};
