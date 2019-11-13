import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import CreateProfile from "./components/CreateProfile.js";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      email: "",
      buttonClicked: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/profile", {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          email: res.email,
          mobile: res.mobile
        });
        console.log("ayyyyy");
      })
      .catch(err => console.log(err));
  }

  submitProfileInfo = () => {
    console.log("SUBMIT");
    fetch("http://localhost:8080/profile", {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        mobile: this.state.mobile
      })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          email: "",
          mobile: "",
          buttonClicked: true
        });
        console.log("ayyyyy");
      })
      .catch(err => console.log(err));
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleMobileChange = e => {
    this.setState({
      mobile: e.target.value
    });
  };

  render() {
    return (
      <div>
        {this.state.loggedIn ? (
          <div style={{ width: "50%", margin: "3rem auto" }}>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                - user profile info
                <div>{this.state.email}</div>
                <div>{this.state.mobile}</div>
              </Col>
            </Row>
            <br />
          </div>
        ) : (
          <CreateProfile
            email={this.state.email}
            mobile={this.state.mobile}
            submitProfileInfo={this.submitProfileInfo}
            buttonClicked={this.state.buttonClicked}
            handleEmailChange={this.state.handleEmailChange}
            handleMobileChange={this.state.handleMobileChange}
          />
        )}
      </div>
    );
  }
}
export default Settings;
