import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="navbar__img" />
      </NavLink>
      <div className="navbar__links">
      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar__links--active" : "navbar__links--inactive"
          }
          end
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navbar__links--active" : "navbar__links--inactive"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};
export default Header;