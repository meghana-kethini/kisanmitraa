import React, { useState } from "react";

/* ── PAGES ───────────────────────────────────────── */
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import DiseasePage from "./pages/DiseasePage";
import MarketPage from "./pages/MarketPage";
import WeatherPage from "./pages/WeatherPage";
import CalendarPage from "./pages/CalendarPage";
import SchemesPage from "./pages/SchemesPage";
import ProfilePage from "./pages/ProfilePage";

/* ── TRANSLATIONS ───────────────────────────────── */
import { T } from "./constants/translations";

/* ── ROOT APP ───────────────────────────────────── */
export default function App() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  const t = T[lang];

  const props = {
    lang,
    setLang,
    page,
    setPage,
    user,
    setUser,
    t
  };

  /* ── PAGE MAP (Clean & Scalable) ──────────────── */
  const PAGES = {
    login: LoginPage,
    register: RegisterPage,
    home: HomePage,
    disease: DiseasePage,
    market: MarketPage,
    weather: WeatherPage,
    calendar: CalendarPage,
    schemes: SchemesPage,
    profile: ProfilePage
  };

  const PageComponent = PAGES[page] || LoginPage;

  return <PageComponent {...props} />;
}

