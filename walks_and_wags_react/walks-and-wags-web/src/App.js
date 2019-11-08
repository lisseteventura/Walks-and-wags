import React from "react";
// import "./App.css";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Settings from "./Settings.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
