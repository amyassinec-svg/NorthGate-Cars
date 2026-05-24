import { useState, useMemo } from "react";

const CARS = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "C220d",
    year: 2022,
    km: 42000,
    price: 28900,
    source: "Mercedes Junge Sterne",
  },
  {
    id: 2,
    brand: "Audi",
    model: "A4 35 TDI",
    year: 2023,
    km: 31000,
    price: 31900,
    source: "Audi Gebrauchtwagen :plus",
  },
  {
    id: 3,
    brand: "BMW",
    model: "320d",
    year: 2021,
    km: 54000,
    price: 27900,
    source: "BMW Premium Selection",
  },
];

function calc(price) {
  const transport = 1500;
  const tax = price * 0.32;
  const service = 1500;
  return Math.round(price + transport + tax + service);
}

export default function Home() {
  const [brand, setBrand] = useState("All");

  const cars = useMemo(() => {
    return CARS.filter((c) => {
      return brand === "All" || c.brand === brand;
    });
  }, [brand]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Northgate Cars</h1>

      <p>Premium Cars Germany → Morocco</p>

      <select onChange={(e) => setBrand(e.target.value)}>
        <option value="All">All</option>
        <option value="Mercedes-Benz">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
      </select>

      <div style={{ display: "grid", gap: 20, marginTop: 20 }}>
        {cars.map((car) => (
          <div key={car.id} style={{ border: "1px solid #ccc", padding: 20 }}>
            <h3>
              {car.brand} {car.model}
            </h3>

            <p>{car.year} • {car.km} km</p>

            <p>Price DE: €{car.price}</p>

            <p>
              Morocco Price: €{calc(car.price)}
            </p>

            <button>WhatsApp Request</button>
          </div>
        ))}
      </div>
    </div>
  );
}
