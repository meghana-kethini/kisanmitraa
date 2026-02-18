import React from "react";

/* ── MOCK FARMING CALENDAR DATA ───────────────── */
const CALENDAR_DATA = [
  {
    id: 1,
    month: "January",
    activity: "Prepare soil for summer crops"
  },
  {
    id: 2,
    month: "February",
    activity: "Sow tomato and chilli seeds"
  },
  {
    id: 3,
    month: "June",
    activity: "Start paddy transplantation"
  },
  {
    id: 4,
    month: "October",
    activity: "Harvest rice crop"
  }
];

export default function CalendarPage({ setPage, t }) {
  return (
    <div className="page-container">
      <h2>{t.calendarTitle || "Farming Calendar"}</h2>

      <div className="calendar-list">
        {CALENDAR_DATA.map((item) => (
          <div key={item.id} className="calendar-card">
            <h3>{item.month}</h3>
            <p>{item.activity}</p>
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