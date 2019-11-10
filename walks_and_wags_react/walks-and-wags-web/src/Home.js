import React, { Component } from "react";
import { Jumbotron } from "./components/Jumbotron.js";
import LogIn from "./components/LogIn.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <LogIn />
      </div>
    );
  }
}
export default Home;
