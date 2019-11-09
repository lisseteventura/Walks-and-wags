import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Settings from "./Settings.js";
import { Layout } from "./components/Layout.js";
import { NavigationBar } from "./components/NavigationBar.js";
function App() {
  return (
    <React.Fragment>
      <NavigationBar />

      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
