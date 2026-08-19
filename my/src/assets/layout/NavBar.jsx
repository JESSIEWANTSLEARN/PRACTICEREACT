import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="top-navbar">

            <div className="navbar-brand">
                <div className="brand-icon">R</div>

                <div>
                    <h2>React Dashboard</h2>
                    <span>State & Routing Practice</span>
                </div>
            </div>

            <div className="navbar-actions">
                <span className="notification">🔔</span>

                <Link to="/profile" className="user-profile">
                    <div className="user-avatar">JP</div>

                    <div className="user-info">
                        <strong>John</strong>
                        <span>Student</span>
                    </div>
                </Link>
            </div>

        </nav>
    );
}

export default NavBar;