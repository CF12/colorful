import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "reset-css";

import "./index.css";

import Home from "./pages/Home/Home";
import Experiment from "./pages/Experiment/Experiment";
import Demo from './pages/Demo/Demo'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/experiment" component={Experiment} />
      <Route path="/demo" component={Demo} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));
