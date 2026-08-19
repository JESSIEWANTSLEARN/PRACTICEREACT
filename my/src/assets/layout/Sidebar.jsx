import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-title">
                MENU
            </div>

            <nav className="sidebar-nav">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    <span>⌂</span>
                    Dashboard
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    <span>👤</span>
                    Profile
                </NavLink>

                <NavLink
                    to="/state"
                    className={({ isActive }) =>
                        isActive ? "sidebar-link active" : "sidebar-link"
                    }
                >
                    <span>⚡</span>
                    State
                </NavLink>

            </nav>

            <div className="sidebar-bottom">
                <div className="sidebar-help">
                    <span>?</span>
                    <div>
                        <strong>Need Help?</strong>
                        <p>React Practice</p>
                    </div>
                </div>
            </div>

        </aside>
    );
}

export default Sidebar;