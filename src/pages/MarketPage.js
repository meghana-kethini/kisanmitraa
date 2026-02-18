import React from "react";

/* ── MOCK MARKET DATA ─────────────────────────── */
const MARKET_DATA = [
  {
    id: 1,
    crop: "Tomato",
    market: "Hyderabad",
    price: "₹1800 / Quintal"
  },
  {
    id: 2,
    crop: "Rice",
    market: "Warangal",
    price: "₹2200 / Quintal"
  },
  {
    id: 3,
    crop: "Chilli",
    market: "Guntur",
    price: "₹9500 / Quintal"
  },
  {
    id: 4,
    crop: "Onion",
    market: "Nizamabad",
    price: "₹1400 / Quintal"
  }
];

export default function MarketPage({ setPage, t }) {
  return (
    <div className="page-container">
      <h2>{t.marketTitle || "Market Prices"}</h2>

      <div className="market-list">
        {MARKET_DATA.map((item) => (
          <div key={item.id} className="market-card">
            <h3>{item.crop}</h3>
            <p>
              <strong>{t.market || "Market"}:</strong> {item.market}
            </p>
            <p>
              <strong>{t.price || "Price"}:</strong> {item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="bottom-action">
        <button onClick={() => setPage("home")}>
          {t.home || "Go Home"}
        </button>
      </div>
    </div>
  );
}
