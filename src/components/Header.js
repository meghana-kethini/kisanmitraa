import React from "react";

export default function Header({
  user,
  setUser,
  setPage,
  lang,
  setLang,
  t
}) {
  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <h1 onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
          {t.appName || "KisanMitra AI"}
        </h1>
      </div>

      <div className="header-right">
        {/* Language Toggle */}
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="lang-select"
        >
          <option value="en">English</option>
          <option value="te">తెలుగు</option>
          <option value="hi">हिंदी</option>
        </select>

        {/* Show Profile if Logged In */}
        {user && (
          <>
            <button onClick={() => setPage("profile")}>
              {t.profile || "Profile"}
            </button>

            <button onClick={handleLogout}>
              {t.logout || "Logout"}
            </button>
          </>
        )}
      </div>
    </header>
  );
}
