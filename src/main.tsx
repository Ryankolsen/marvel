import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { Team } from "./components/Team";
import { MarvelMain } from "./components/Marvel/MarvelMain";
import { MarvelHero } from "./components/Marvel/MarvelHero";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<Team />} />
        <Route path="/marvel" element={<MarvelMain />} />
        <Route path="/marvel-hero/:heroId" element={<MarvelHero />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
