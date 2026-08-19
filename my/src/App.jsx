import React from "react";
import "./App.css";

import NavBar from "./assets/layout/NavBar.jsx";
import Sidebar from "./assets/layout/Sidebar.jsx";
import Footer from "./assets/layout/Footer.jsx";
export default function App() {
  return (
    <div className="app">

      <NavBar />

      <div className="main-container">

        <Sidebar />

        <div className="content">
          <h1>Content</h1>
        </div>

      </div>

      <Footer />

    </div>
  );
}