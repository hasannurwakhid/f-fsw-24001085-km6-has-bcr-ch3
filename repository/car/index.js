const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");

function filterCarByAvailability() {
  const filteredCarByAvailability = [];
  cars.map((car) => {
    if (car.available == true) {
      filteredCarByAvailability.push(car);
    }
  });
  return filteredCarByAvailability;
}

exports.searchCars = (req) => {
  const availableCars = filterCarByAvailability();
  const searchedCars = availableCars.filter(
    (availableCar) =>
      new Date(availableCar.availableAt.substring(0, 10)) <=
        new Date(req.body.tanggal) &&
      req.body["jumlah-penumpang"] <= availableCar.capacity
  );
  return searchedCars;
};

exports.getCars = () => {
  let data = cars.map((car) => car);
  return data;
};

exports.getCar = (req) => {
  const id = req?.params?.id;

  let data = cars.find((car) => car.id === id);
  return data;
};

exports.postCar = (req) => {
  const newCar = {
    id: uuidv4(),
    ...req.body,
  };

  cars.push(newCar);

  return newCar;
};

exports.updateCar = (req) => {
  const id = req?.params?.id;
  const updatedCar = {
    id: id,
    ...req.body,
  };
  cars.map((car, index) => {
    if (car?.id == id) {
      car[index] = updatedCar;
    }
  });

  return updatedCar;
};

exports.deleteCar = (req) => {
  const id = req?.params?.id;

  index = cars.findIndex((car) => car.id === id);
  const data = cars[index];
  cars.splice(index, 1);
  return data;
};
