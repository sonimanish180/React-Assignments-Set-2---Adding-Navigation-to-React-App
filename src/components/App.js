import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        {/* <Home />
        <About /> */}
      </div>
    );
  }
}

export default App;
