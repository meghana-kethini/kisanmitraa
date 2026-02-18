import React, { useState } from "react";

export default function RegisterPage({ setPage, setUser, t }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [village, setVillage] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !phone || !village || !password) {
      alert("Please fill all fields");
      return;
    }

    // Mock registration (no backend change)
    const userData = {
      name,
      phone,
      village
    };

    setUser(userData);
    setPage("home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{t.registerTitle || "Register for KisanMitra AI"}</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder={t.name || "Full Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder={t.phone || "Phone Number"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder={t.village || "Village"}
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />

          <input
            type="password"
            placeholder={t.password || "Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {t.register || "Register"}
          </button>
        </form>

        <p className="switch-auth">
          {t.haveAccount || "Already have an account?"}{" "}
          <span onClick={() => setPage("login")}>
            {t.login || "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
