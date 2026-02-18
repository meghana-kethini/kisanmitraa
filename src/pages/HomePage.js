import React from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ChatBot from "../components/ChatBot";

export default function HomePage(props) {
  const { user, setPage, t } = props;

  return (
    <div>
      {/* Header */}
      <Header {...props} />

      {/* Main Content */}
      <div className="page-container">
        <h2>
          {t.home || "Home"} {user ? ` - ${user.name}` : ""}
        </h2>

        <div className="home-buttons">
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
        </div>

        {/* ChatBot */}
        <div style={{ marginTop: "20px" }}>
          <ChatBot t={t} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav setPage={setPage} t={t} />
    </div>
  );
}
