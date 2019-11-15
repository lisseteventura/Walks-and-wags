import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import SignUp from "./SignUp.js";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: ""
      },
      email: "",
      mobile: "",
      loggedIn: false,
      signedUp: false
    };
  }

  // ------------USER LOGIN-----------
  submitLogIn = e => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res, "my response");
        this.setState({
          user: { ...this.state.user, res },
          loggedIn: true
        });
        localStorage.setItem("user", res.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // ------------USER SIGNUP-----------
  submitSignUp = e => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.user.username,
        password: this.state.user.password
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res, "my response");
        localStorage.setItem("user", res.token);
        this.setState({
          user: { ...this.state.user, res },
          signedUp: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // ------------HANDLE CHANGE-----------
  handleUsernameChange = e => {
    this.setState({ user: { ...this.state.user, username: e.target.value } });
  };

  handlePasswordChange = e => {
    this.setState({
      user: { ...this.state.user, password: e.target.value }
    });
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/profile" />;
    }
    if (this.state.signedUp) {
      return <Redirect to="/settings" />;
    }
    return (
      <div>
        <Form
          onSubmit={this.submitLogIn}
          style={{ width: "80%", margin: "auto" }}
        >
          <FormGroup>
            <Label for="Username">Username</Label>
            <Input
              type="username"
              name="username"
              value={this.state.username}
              id="username"
              placeholder="username"
              onChange={this.handleUsernameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              id="password"
              placeholder="password"
              onChange={this.handlePasswordChange}
            />
          </FormGroup>
          <Button
            className="btn btn-primary btn-block"
            onClick={this.submitLogIn}
            style={{ marginBottom: "1rem" }}
          >
            Log in
          </Button>
          <SignUp
            username={this.state.username}
            password={this.state.password}
            submitSignUp={e => this.submitSignUp(e)}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
          />
        </Form>
      </div>
    );
  }
}

export default LogIn;
