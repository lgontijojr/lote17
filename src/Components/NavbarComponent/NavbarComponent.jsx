import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import NavbarLinksComponent from "../NavbarLinksComponent/NavbarLinksComponent";
import InstagramIcon from "@material-ui/icons/Instagram";
import Menu from "@material-ui/icons/Menu";
import { logoImage1, logoImage2 } from "../../img/index";
import * as helpers from "../../utilities";

import "./navbarComponent.css";

function NavbarComponent() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(helpers.getWindowWidth());
  const [logoImage, setLogoImage] = useState(
    helpers.getWindowWidth() > 650 ? logoImage1 : logoImage2
  );
  const [isMobileView, setMobileView] = useState(
    helpers.getWindowWidth() < 650 && true
  );

  const handleMobileMenu = (isOpen) => {
    setMobileMenuOpen(isOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(helpers.getWindowWidth());

      if (windowWidth < 650 && windowWidth < 750) {
        setMobileView(true);
        setLogoImage(logoImage2);
      } else {
        setMobileView(false);
        setMobileMenuOpen(false);
        setLogoImage(logoImage1);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

  return (
    <React.Fragment>
      <div className="navbar">
        <span>
          <NavLink to={{ pathname: "/" }}>
            <img className="logo_image" src={logoImage} alt="Logo" />
          </NavLink>
        </span>

        <NavbarLinksComponent
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenu={handleMobileMenu}
        />

        <span>
          {isMobileView ? (
            <button
              className="navbar_icon_button"
              onClick={() => handleMobileMenu(!isMobileMenuOpen)}
            >
              <Menu className="navbar_icon" />
            </button>
          ) : (
            <button
              onClick={() =>
                helpers.openInNewTab("https://www.instagram.com/lote17/")
              }
              className="navbar_icon_button"
            >
              <InstagramIcon className="navbar_icon" />
            </button>
          )}
        </span>
      </div>
    </React.Fragment>
  );
}

export default NavbarComponent;
