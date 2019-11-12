import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SignUp from "./SignUp.js";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
      signedUp: false
    };
  }

  // // console logs the name and value of both username/pw (ex: username ____)
  // handleChange = e => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   let data = {};
  //   data[name] = value;
  //   //set data obj empty which will be populated by the value from the input
  //   this.setState(data);
  //   console.log(name, value);
  // };
  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  submitLogIn = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", this.state)
      .then(response => {
        console.log(response);
        this.setState({ loggedIn: true });
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  };

  submitSignUp = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/signup", this.state)
      .then(response => {
        console.log(response);
        this.setState({ signedUp: true });
      })
      .catch(error => {
        console.log(error);
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
          style={{ width: "50%", margin: "auto" }}
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
