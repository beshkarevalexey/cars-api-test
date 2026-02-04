const express = require("express");
const app = express();

app.use(express.json());

let cars = [];
let idCounter = 1;

/* -------------------
   Healthcheck
------------------- */
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

/* -------------------
   Create car
------------------- */
app.post("/api/cars", (req, res) => {
  const { brand, model, year, color, price } = req.body;

  if (!brand || !model || !year || !color || price === undefined) {
    return res.status(400).json({
      error: "Missing required fields"
    });
  }

  const car = {
    id: idCounter++,
    ...req.body
  };

  cars.push(car);

  res.status(201).json(car);
});

/* -------------------
   Get all cars
------------------- */
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

/* -------------------
   Get car by id
------------------- */
app.get("/api/cars/:id", (req, res) => {
  const car = cars.find(c => c.id === Number(req.params.id));

  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.json(car);
});

/* -------------------
   Delete car by id
------------------- */
app.delete("/api/cars/:id", (req, res) => {
  const index = cars.findIndex(c => c.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }

  cars.splice(index, 1);
  res.status(204).send();
});

/* -------------------
   API Info (для кандидата)
------------------- */
app.get("/api/info", (req, res) => {
  res.json({
    message: "Available API endpoints",
    endpoints: [
      {
        method: "GET",
        path: "/health",
        curl: "curl http://localhost:3000/health"
      },
      {
        method: "POST",
        path: "/api/cars",
        curl: `curl -X POST http://localhost:3000/api/cars -H "Content-Type: application/json" -d '{"brand":"BMW","model":"X5","year":2022,"color":"black","price":50000}'`
      },
      {
        method: "GET",
        path: "/api/cars",
        curl: "curl http://localhost:3000/api/cars"
      },
      {
        method: "GET",
        path: "/api/cars/:id",
        curl: "curl http://localhost:3000/api/cars/1"
      },
      {
        method: "DELETE",
        path: "/api/cars/:id",
        curl: "curl -X DELETE http://localhost:3000/api/cars/1"
      }
    ]
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
