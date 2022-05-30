import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import NavbarLinksComponent from "../NavbarLinksComponent/NavbarLinksComponent";

import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";

import { logoImage1 } from "../../img/index";

import "./navbarComponent.css";

function NavbarComponent() {
  const [goingUp, setGoingUp] = useState(false);
  const [navBarClassname, setNavbarClassname] = useState("navbar");

  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      let prevScrollYPosition = prevScrollY.current;

      if (prevScrollYPosition < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollYPosition > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollYPosition = currentScrollY;

      return currentScrollY < 20
        ? setNavbarClassname("navbar")
        : setNavbarClassname("navbar_scroll");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <React.Fragment>
      <div className={navBarClassname}>
        <span className="desktop_logo">
          <NavLink to={{ pathname: "/" }}>
            <img className="logo_image" src={logoImage1} alt="Logo" />
          </NavLink>
        </span>

        <NavbarLinksComponent />

        <span>
          <IconButton
            disableRipple
            disableFocusRipple
            aria-label="Instagram Button"
            target="_blank"
            href="https://www.instagram.com/lote17/"
            style={{ backgroundColor: "transparent" }}
          >
            <InstagramIcon className="social_media_icon_navbar" />
          </IconButton>
        </span>
      </div>
    </React.Fragment>
  );
}

export default NavbarComponent;
