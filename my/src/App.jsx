import { Routes, Route } from "react-router-dom";

import NavBar from "./assets/layout/NavBar";
import Sidebar from "./assets/layout/Sidebar";
import Footer from "./assets/layout/Footer";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import State from "./pages/State";
import Error from "./pages/Error";

import "./App.css";

function App() {

    return (
        <div className="app">

            <NavBar />

            <div className="app-body">

                <Sidebar />

                <main className="main-content">

                    <Routes>

                        <Route
                            path="/"
                            element={<Home />}
                        />

                        <Route
                            path="/profile"
                            element={<Profile />}
                        />

                        <Route
                            path="/state"
                            element={<State />}
                        />

                        <Route
                            path="*"
                            element={<Error />}
                        />

                    </Routes>

                </main>

            </div>

            <Footer />

        </div>
    );
}

export default App;