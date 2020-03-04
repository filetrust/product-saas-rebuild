import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./App.css";
import Layout from "./components/shared/Layout";
import AnalysisSwagger from "./components/swagger/swagger";

import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

var Root = () => {
  return (
  <Router basename='/'>

    <Route><AnalysisSwagger /></Route>
  </Router>);
}

ReactDOM.render(<Root />, document.getElementById("root"));