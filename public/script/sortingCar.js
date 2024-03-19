let cars = JSON.parse(document.getElementById("carsData").textContent);
let cars2 = [...cars];
const cardCars = document.getElementById("car-rent");
const urutkanTahun = document.getElementById("sortYear");

function fungsiMenampilkan(arr) {
  let cardSearchAvailable = "";
  arr.map((car) => {
    cardSearchAvailable += `<div class="col-md-4 d-flex">
                  <div class="card mb-4 flex-fill">
                    <div class="card-body p-4 d-flex flex-column">
                      <img
                        src="${car.image}"
                        class="img-fluid mb-4 rounded"
                        alt="..."
                      />
                      <p class="card-text">${car.model}</p>
                      <h5 class="card-title mb-3">Rp ${car.rentPerDay
                        .toLocaleString()
                        .replace(",", ".")} / hari</h5>
                      <p class="card-text">
                        ${car.description}
                      </p>
                      <div class="mb-2">
                        <img class="me-2" src="assets/fi_users.png" alt="" />${
                          car.capacity
                        }
                        Orang
                      </div>
                      <div class="mb-2">
                        <img
                          class="me-2"
                          src="assets/fi_settings.png"
                          alt=""
                        />${car.transmission}
                      </div>
                      <div class="mb-2">
                        <img
                          class="me-2"
                          src="assets/fi_calendar.png"
                          alt=""
                        />Tahun ${car.year}
                      </div>
                      <div class="mt-auto">
                      <a
                        href="#"
                        class="btn col-12 text-white"
                        style="background-color: #5cb85f"
                        >Pilih Mobil</a
                      >
                      </div>
                    </div>
                  </div>
                </div>`;
  });
  cardCars.innerHTML = cardSearchAvailable;
}

urutkanTahun.addEventListener("change", (event) => {
  if (urutkanTahun.value == "terbaru") {
    fungsiMenampilkan(cars.sort((car1, car2) => car2.year - car1.year));
  } else if (urutkanTahun.value == "terlama") {
    fungsiMenampilkan(cars.sort((car1, car2) => car1.year - car2.year));
  } else {
    fungsiMenampilkan(cars2);
  }
});
