import React, { Component } from "react";
import { Jumbotron } from "./components/Jumbotron.js";
import LogIn from "./components/LogIn.js";
import Footer from "./components/Footer.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <LogIn />
        <Footer />
      </div>
    );
  }
}
export default Home;
