import React, { Component } from "react";

class LogOut extends Component {
  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <h1>Logout Successful.</h1>
        <h4>You have successfully logged out. </h4>
      </div>
    );
  }
}

export default LogOut;
