import React, { useMemo, useState } from "react";

/* =====================
   BRAND: NORTHGATE CARS
   ===================== */

const BRAND = {
  name: "Northgate Cars",
  tagline: "Premium Vehicles from Germany to Morocco",
};

/* =====================
   SIMPLE LOGO (SVG WORDMARK)
   ===================== */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 20V6l8-4 8 4v14"
          stroke="black"
          strokeWidth="1.5"
        />
        <path
          d="M9 20v-6h6v6"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
      <span className="font-semibold tracking-widest text-lg">
        NORTHGATE
      </span>
    </div>
  );
}

/* =====================
   SAMPLE DATA
   ===================== */

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

/* =====================
   COST CALCULATION
   ===================== */

function calculateTotal(price) {
  const transport = 1500;
  const taxRate = 0.32;
  const tax = price * taxRate;
  const service = 1500;
  return Math.round(price + transport + tax + service);
}

/* =====================
   APP
   ===================== */

export default function NorthgateCarsApp() {
  const [selectedBrand, setSelectedBrand] = useState("All");

  const cars = useMemo(() => {
    return CARS.filter((c) => {
      if (selectedBrand === "All") return true;
      return c.brand === selectedBrand;
    });
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* HEADER */}
      <header className="flex justify-between items-center p-6 border-b">
        <Logo />
        <nav className="flex gap-6 text-sm">
          <a href="#cars">Cars</a>
          <a href="#how">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Premium Cars from Germany to Morocco
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Certified vehicles from Mercedes, Audi and BMW with full transparent
          import pricing to Morocco.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full">
          Browse Vehicles
        </button>
      </section>

      {/* FILTER */}
      <section className="px-6 flex gap-4 mb-6">
        <select
          className="border p-2"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="All">All Brands</option>
          <option value="Mercedes-Benz">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
        </select>
      </section>

      {/* CARS */}
      <section
        id="cars"
        className="grid md:grid-cols-3 gap-6 px-6 pb-20"
      >
        {cars.map((car) => {
          const total = calculateTotal(car.price);

          return (
            <div key={car.id} className="border rounded-xl p-4">
              <h3 className="text-lg font-semibold">
                {car.brand} {car.model}
              </h3>
              <p className="text-sm text-gray-500">{car.source}</p>
              <p className="mt-2">Year: {car.year}</p>
              <p>KM: {car.km.toLocaleString()}</p>

              <div className="mt-3">
                <p>Price DE: €{car.price.toLocaleString()}</p>
                <p className="font-bold">
                  Morocco Price: €{total.toLocaleString()}
                </p>
              </div>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
                Request on WhatsApp
              </button>
            </div>
          );
        })}
      </section>

      {/* HOW */}
      <section id="how" className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          How it works
        </h2>
        <div className="max-w-2xl mx-auto space-y-3 text-gray-700">
          <p>1. Choose a certified vehicle from Germany</p>
          <p>2. See full import cost for Morocco instantly</p>
          <p>3. We handle export, documents & delivery</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-20 px-6">
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p className="text-gray-600 mb-4">
          Fast response via WhatsApp
        </p>
        <a
          href="https://wa.me/000000000"
          className="bg-green-600 text-white px-6 py-3 rounded-full"
        >
          Open WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Northgate Cars. Germany → Morocco Export
      </footer>
    </div>
  );
}
