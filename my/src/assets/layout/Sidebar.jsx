import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <p className="sidebar-title">MENU</p>

        <nav className="sidebar-navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-active" : "sidebar-link"
            }
          >
            <span>⌂</span>
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-active" : "sidebar-link"
            }
          >
            <span>👤</span>
            Profile
          </NavLink>

          <NavLink
            to="/state"
            className={({ isActive }) =>
              isActive ? "sidebar-link sidebar-active" : "sidebar-link"
            }
          >
            <span>⚡</span>
            State
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-help">
        <div className="help-icon">?</div>

        <div>
          <strong>Need Help?</strong>
          <p>React Practice</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
