import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Badpage from "./BadPage";
import Home from "./Home";
import LocationDisplay from "./LocationDisplay";

class App extends Component {
  render() {
    return (
      <>
        <div id="main"></div>
        {/* Do not remove the main div */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
        <Switch>
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/" render={() => <Home />} />
          <Route component={Badpage} />
        </Switch>
        <LocationDisplay />
        {/* <Home />
        <About /> */}
      </>
    );
  }
}

export default App;
