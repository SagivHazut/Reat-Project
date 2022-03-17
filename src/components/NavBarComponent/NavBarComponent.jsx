import { NavLink } from "react-router-dom";
import "./NavBarComponent.css";

const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid ">
        <NavLink className="navbar-brand" to="/">
          Zoo Pet
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/home"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/cardspanel"
                activeClassName="activeLink"
              >
                Cards Panel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/login"
                activeClassName="activeLink"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/signup"
                activeClassName="activeLink"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
