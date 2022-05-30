import React from "react";
import { menuImage } from "../../img/index";

import "./menuPageImages.css";

function MenuPageImages() {
  return (
    <div className="menu_page_background">
      <img className="menu_image" src={menuImage} alt="Menu" />
    </div>
  );
}

export default MenuPageImages;
