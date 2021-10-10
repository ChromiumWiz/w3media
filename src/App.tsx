import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/common";
import { NAV_DATA } from "./constants";
import Page from "./components/pages";

function App() {
  return (
    <Router>
      <Navbar navData={NAV_DATA} />
      <Page />
    </Router>
  );
}

export default App;
