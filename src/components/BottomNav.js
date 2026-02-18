import React from "react";

export default function BottomNav({ setPage, t }) {
  return (
    <nav className="bottom-nav">
      <button onClick={() => setPage("home")}>
        {t.home || "Home"}
      </button>

      <button onClick={() => setPage("disease")}>
        {t.disease || "Disease"}
      </button>

      <button onClick={() => setPage("market")}>
        {t.market || "Market"}
      </button>

      <button onClick={() => setPage("weather")}>
        {t.weather || "Weather"}
      </button>

      <button onClick={() => setPage("calendar")}>
        {t.calendar || "Calendar"}
      </button>

      <button onClick={() => setPage("schemes")}>
        {t.schemes || "Schemes"}
      </button>
    </nav>
  );
}
