import React from "react";
import { NavLink } from "react-router-dom";

import "./navbarLinksComponent.css";

function NavbarLinksComponent() {
  return (
    <React.Fragment>
      <li className="list">
        <ul className="list_items">
          <NavLink className="links" to={{ pathname: "/sobre" }}>
            Sobre
          </NavLink>
        </ul>

        <ul className="list_items">
          <NavLink className="links" to={{ pathname: "/chef" }}>
            Chef
          </NavLink>
        </ul>

        <ul className="list_items">
          <NavLink className="links" to={{ pathname: "/menu" }}>
            Menu
          </NavLink>
        </ul>

        <ul className="list_items">
          <NavLink className="links" to={{ pathname: "/reservas" }}>
            Reservas
          </NavLink>
        </ul>
      </li>
    </React.Fragment>
  );
}

export default NavbarLinksComponent;
