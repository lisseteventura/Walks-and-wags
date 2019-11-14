import React, { Component } from "react";

class LogOut extends Component {
  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <h1>Logout Successful.</h1>
      </div>
    );
  }
}

export default LogOut;
