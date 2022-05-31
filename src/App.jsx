import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ChefPage from "./Pages/ChefPage";
import MainPage from "./Pages/MainPage";
import MenuPage from "./Pages/MenuPage";
import ReservasPage from "./Pages/ReservasPage";
import SobrePage from "./Pages/SobrePage";
import Footer from "./Components/Footer/Footer";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";

import ScrollToTop from "./Util/util";

import "./app.css";

function App() {
  return (
    <React.Fragment>
      <div className="main">
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/menu" exact component={MenuPage} />
            <Route path="/chef" exact component={ChefPage} />
            <Route path="/sobre" exact component={SobrePage} />
            <Route path="/reservas" exact component={ReservasPage} />
          </Switch>
          <NavbarComponent />
        </Router>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
