northgate-cars/
 ├── pages/
 │    ├── index.js
 ├── lib/
 │    ├── airtable.js
 ├── package.json
 ├── .env.local

import { useEffect, useState } from "react";
import { fetchCars } from "../lib/airtable";

function calc(price) {
  const transport = 1500;
  const tax = price * 0.32;
  const service = 1500;
  return Math.round(price + transport + tax + service);
}

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchCars();
      setCars(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Loading cars...</p>;

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Northgate Cars</h1>
      <p>Germany → Morocco Premium Vehicle Export</p>

      <div style={{ display: "grid", gap: 20, marginTop: 20 }}>
        {cars.map((car) => (
          <div key={car.id} style={{ border: "1px solid #ddd", padding: 20 }}>
            <h3>{car.fields.brand} {car.fields.model}</h3>

            <p>{car.fields.year} • {car.fields.km} km</p>

            <p>Price DE: €{car.fields.price_de}</p>

            <p>
              Morocco Price: €{calc(car.fields.price_de)}
            </p>

            <a
              href={`https://wa.me/000000000?text=I%20want%20this%20car:%20${car.fields.brand}%20${car.fields.model}`}
            >
              WhatsApp Request
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
