const carRepo = require("../../repository/car");

exports.getCars = () => {
  const data = carRepo.getCars();
  return data;
};

exports.getCar = (req) => {
  const data = carRepo.getCar(req);
  return data;
}

exports.postCar = (req) => {
  const data = carRepo.postCar(req);
  return data;
};

exports.updateCar = (req) => {
  const data = carRepo.updateCar(req);
  return data;
};

exports.deleteCar = (req) => {
  const data = carRepo.deleteCar(req);
  return data;
};