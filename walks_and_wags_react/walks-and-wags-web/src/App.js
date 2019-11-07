import React from "react";
// import "./App.css";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Settings from "./Settings.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  );
}

export default App;
