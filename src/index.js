import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styles from "./styles";
import reportWebVitals from "./reportWebVitals"; // <-- add this

// Inject styles from styles.js
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Optional performance measuring
reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
