import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>

      <Navbar />

      <div className="page-container">

        <Sidebar />

        <main className="content">
          <Outlet />
        </main>

      </div>

      <Footer />

    </div>
  );
}