import React from "react";

/* ── MOCK WEATHER DATA ───────────────────────── */
const WEATHER_DATA = {
  location: "Hyderabad",
  temperature: "32°C",
  condition: "Partly Cloudy",
  humidity: "60%",
  wind: "12 km/h"
};

export default function WeatherPage({ setPage, t }) {
  return (
    <div className="page-container">
      <h2>{t.weatherTitle || "Weather Forecast"}</h2>

      <div className="weather-card">
        <h3>{WEATHER_DATA.location}</h3>

        <p>
          <strong>{t.temperature || "Temperature"}:</strong>{" "}
          {WEATHER_DATA.temperature}
        </p>

        <p>
          <strong>{t.condition || "Condition"}:</strong>{" "}
          {WEATHER_DATA.condition}
        </p>

        <p>
          <strong>{t.humidity || "Humidity"}:</strong>{" "}
          {WEATHER_DATA.humidity}
        </p>

        <p>
          <strong>{t.wind || "Wind Speed"}:</strong>{" "}
          {WEATHER_DATA.wind}
        </p>
      </div>

      <div className="bottom-action">
        <button onClick={() => setPage("home")}>
          {t.home || "Go Home"}
        </button>
      </div>
    </div>
  );
}
