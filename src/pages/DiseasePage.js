import React, { useState } from "react";

/* ── MOCK DISEASE DATA (No Changes to Logic) ───── */
const DISEASES = [
  {
    id: 1,
    name: "Leaf Spot",
    crop: "Tomato",
    symptoms: "Brown spots on leaves with yellow halo.",
    solution: "Use Mancozeb fungicide spray every 7 days."
  },
  {
    id: 2,
    name: "Powdery Mildew",
    crop: "Chilli",
    symptoms: "White powdery growth on leaf surface.",
    solution: "Spray Sulphur-based fungicide."
  },
  {
    id: 3,
    name: "Bacterial Blight",
    crop: "Rice",
    symptoms: "Yellowing and drying of leaf edges.",
    solution: "Use resistant varieties and copper spray."
  }
];

export default function DiseasePage({ setPage, t }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page-container">
      <h2>{t.diseaseTitle || "Crop Disease Detection"}</h2>

      {!selected && (
        <div className="disease-list">
          {DISEASES.map((d) => (
            <div
              key={d.id}
              className="disease-card"
              onClick={() => setSelected(d)}
            >
              <h3>{d.name}</h3>
              <p>{d.crop}</p>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="disease-details">
          <button onClick={() => setSelected(null)}>
            ← {t.back || "Back"}
          </button>

          <h3>{selected.name}</h3>
          <p>
            <strong>{t.crop || "Crop"}:</strong> {selected.crop}
          </p>
          <p>
            <strong>{t.symptoms || "Symptoms"}:</strong> {selected.symptoms}
          </p>
          <p>
            <strong>{t.solution || "Solution"}:</strong> {selected.solution}
          </p>
        </div>
      )}

      <div className="bottom-action">
        <button onClick={() => setPage("home")}>
          {t.home || "Go Home"}
        </button>
      </div>
    </div>
  );
}
