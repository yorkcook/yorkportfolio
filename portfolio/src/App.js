import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
