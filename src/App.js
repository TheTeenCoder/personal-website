import React from "react";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

import './styles/App.css'
import Projects from "./routes/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
