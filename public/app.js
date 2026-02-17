async function createCar() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const year = Number(document.getElementById("year").value);
  const color = document.getElementById("color").value;
  const price = Number(document.getElementById("price").value);

  const res = await fetch("/api/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ brand, model, year, color, price })
  });

  if (!res.ok) {
    alert("Error creating car");
    return;
  }

  loadCars();
}

async function loadCars() {
  const res = await fetch("/api/cars");
  const cars = await res.json();

  const container = document.getElementById("cars");
  container.innerHTML = "";

  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.background = car.color;

    div.innerHTML = `
      <strong>${car.brand} ${car.model}</strong><br/>
      Year: ${car.year}<br/>
      Price: ${car.price}<br/>
      ID: ${car.id}<br/>
      <button onclick="deleteCar(${car.id})">Delete</button>
    `;

    container.appendChild(div);
  });
}

async function getCarById() {
  const id = document.getElementById("searchId").value;
  const res = await fetch(`/api/cars/${id}`);

  if (!res.ok) {
    alert("Car not found");
    return;
  }

  const car = await res.json();
  alert(JSON.stringify(car, null, 2));
}

async function deleteById() {
  const id = document.getElementById("searchId").value;
  await fetch(`/api/cars/${id}`, { method: "DELETE" });
  loadCars();
}

async function deleteCar(id) {
  await fetch(`/api/cars/${id}`, { method: "DELETE" });
  loadCars();
}

loadCars();
