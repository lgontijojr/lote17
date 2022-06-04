import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import NavbarLinksComponent from "../NavbarLinksComponent/NavbarLinksComponent";

import InstagramIcon from "@material-ui/icons/Instagram";
import Menu from "@material-ui/icons/Menu";

import { logoImage1, logoImage2 } from "../../img/index";

import "./navbarComponent.css";

const getWindowWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentScrollPosition = () => {
  const { scrollY } = window;

  return scrollY;
};

function NavbarComponent() {
  const [logoImage, setLogoImage] = useState(
    getWindowWidth() > 650 ? logoImage1 : logoImage2
  );
  const [navBarClassname, setNavbarClassname] = useState("navbar");
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [isMobileView, setMobileView] = useState(
    getWindowWidth() < 650 && true
  );
  const [currentScrollPosition, setCurrentScrollPosition] = useState(
    getCurrentScrollPosition()
  );
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = (isOpen) => {
    setMobileMenuOpen(isOpen);

    if (isOpen) setNavbarClassname("navbar_scroll");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(getWindowWidth());

      if (windowWidth < 650 && windowWidth < 750) {
        setMobileView(true);
        setLogoImage(logoImage2);
      } else {
        setMobileView(false);
        setLogoImage(logoImage1);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentScrollPosition(getCurrentScrollPosition());

      currentScrollPosition < 20
        ? setNavbarClassname("navbar")
        : setNavbarClassname("navbar_scroll");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentScrollPosition]);

  return (
    <React.Fragment>
      <div className={navBarClassname}>
        <span className="desktop_logo">
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
              onClick={() => openInNewTab("https://www.instagram.com/lote17/")}
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
