import React from "react";

/* ── MOCK GOVERNMENT SCHEMES DATA ─────────────── */
const SCHEMES = [
  {
    id: 1,
    name: "PM-KISAN",
    benefit: "₹6000 per year income support",
    description:
      "Financial assistance to small and marginal farmers in three installments."
  },
  {
    id: 2,
    name: "PM Fasal Bima Yojana",
    benefit: "Crop insurance coverage",
    description:
      "Insurance scheme to protect farmers against crop loss due to natural calamities."
  },
  {
    id: 3,
    name: "Soil Health Card Scheme",
    benefit: "Free soil testing",
    description:
      "Provides soil health report and fertilizer recommendations to farmers."
  }
];

export default function SchemesPage({ setPage, t }) {
  return (
    <div className="page-container">
      <h2>{t.schemesTitle || "Government Schemes"}</h2>

      <div className="schemes-list">
        {SCHEMES.map((scheme) => (
          <div key={scheme.id} className="scheme-card">
            <h3>{scheme.name}</h3>

            <p>
              <strong>{t.benefit || "Benefit"}:</strong> {scheme.benefit}
            </p>

            <p>
              <strong>{t.description || "Description"}:</strong>{" "}
              {scheme.description}
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
