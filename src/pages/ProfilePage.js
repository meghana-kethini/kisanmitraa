import React from "react";

export default function ProfilePage({ user, setUser, setPage, t }) {
  if (!user) {
    return (
      <div className="page-container">
        <h2>{t.profileTitle || "Profile"}</h2>
        <p>{t.noUser || "No user logged in."}</p>

        <button onClick={() => setPage("login")}>
          {t.login || "Go to Login"}
        </button>
      </div>
    );
  }

  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <div className="page-container">
      <h2>{t.profileTitle || "Profile"}</h2>

      <div className="profile-card">
        <p>
          <strong>{t.name || "Name"}:</strong> {user.name}
        </p>

        <p>
          <strong>{t.phone || "Phone"}:</strong> {user.phone}
        </p>

        {user.village && (
          <p>
            <strong>{t.village || "Village"}:</strong> {user.village}
          </p>
        )}
      </div>

      <div className="profile-actions">
        <button onClick={handleLogout}>
          {t.logout || "Logout"}
        </button>

        <button onClick={() => setPage("home")}>
          {t.home || "Go Home"}
        </button>
      </div>
    </div>
  );
}
