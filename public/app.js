const carsContainer = document.getElementById("cars");

async function createCar() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const year = Number(document.getElementById("year").value);
  const color = document.getElementById("color").value;
  const price = Number(document.getElementById("price").value);

  const res = await fetch("http://localhost:3000/api/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ brand, model, year, color, price })
  });

  if (!res.ok) return alert("Error creating car");
  loadCars();
}

async function loadCars() {
  const res = await fetch("http://localhost:3000/api/cars");
  const cars = await res.json();

  carsContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.background = car.color;
    div.innerHTML = `
      <strong>${car.brand} ${car.model}</strong><br/>
      Year: ${car.year}<br/>
      Price: ${car.price}<br/>
      ID: ${car.id}<br/>
      <button data-id="${car.id}">Delete</button>
    `;
    div.querySelector("button").onclick = () => deleteCar(car.id);
    fragment.appendChild(div);
  });

  carsContainer.appendChild(fragment);
}

async function getCarById() {
  const id = document.getElementById("searchId").value;
  const res = await fetch(`http://localhost:3000/api/cars/${id}`);
  if (!res.ok) return alert("Car not found");
  const car = await res.json();
  alert(JSON.stringify(car, null, 2));
}

async function deleteById() {
  const id = document.getElementById("searchId").value;
  await fetch(`http://localhost:3000/api/cars/${id}`, { method: "DELETE" });
  loadCars();
}

async function deleteCar(id) {
  await fetch(`http://localhost:3000/api/cars/${id}`, { method: "DELETE" });
  loadCars();
}

// initial load
loadCars();
