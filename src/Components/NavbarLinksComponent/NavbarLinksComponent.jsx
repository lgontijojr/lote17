import React from "react";
import { NavLink } from "react-router-dom";

import "./navbarLinksComponent.css";

function NavbarLinksComponent({ isMobileMenuOpen, handleMobileMenu }) {
  const menuState = isMobileMenuOpen ? "open" : "close";

  return (
    <React.Fragment>
      <li className={`list_${menuState}`}>
        <ul className="list_items">
          <NavLink
            className="links"
            to={{ pathname: "/sobre" }}
            onClick={() => handleMobileMenu(false)}
          >
            Sobre
          </NavLink>
        </ul>

        <ul className="list_items">
          <NavLink
            className="links"
            to={{ pathname: "/chef" }}
            onClick={() => handleMobileMenu(false)}
          >
            Chef
          </NavLink>
        </ul>

        <ul className="list_items">
          <NavLink
            className="links"
            to={{ pathname: "/menu" }}
            onClick={() => handleMobileMenu(false)}
          >
            Menu
          </NavLink>
        </ul>

        <ul className="list_items">
          <NavLink
            className="links"
            to={{ pathname: "/reservas" }}
            onClick={() => handleMobileMenu(false)}
          >
            Reservas
          </NavLink>
        </ul>
      </li>
    </React.Fragment>
  );
}

export default NavbarLinksComponent;
