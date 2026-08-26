import { Routes, Route } from "react-router-dom";

import NavBar from "./assets/layout/NavBar";
import Sidebar from "./assets/layout/Sidebar";
import Footer from "./assets/layout/Footer";

import Home from "./assets/pages/Home";
import ProductDetail from "./assets/pages/ProductDetail";
import Profile from "./assets/pages/Profile";
import State from "./assets/pages/State";
import About from "./assets/pages/About";
import Services from "./assets/pages/Services";
import Contact from "./assets/pages/Contact";
import Error from "./assets/pages/Error";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />

      <div className="app-body">
        <Sidebar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/state" element={<State />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
