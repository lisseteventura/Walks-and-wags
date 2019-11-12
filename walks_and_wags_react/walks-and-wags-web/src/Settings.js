import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { Row, Col } from "reactstrap";
// import axios from "axios";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
      email: null,
      buttonClicked: false
    };
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
      <div style={{ width: "50%", margin: "10rem auto" }}>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3 - user profile info
          </Col>
        </Row>
        <br />
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="email"
              value={this.state.email}
              onChange={this.state.handleEmailChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mobile">Mobile</Label>
            <Input
              type="mobile"
              name="mobile"
              id="mobile"
              placeholder="mobile"
              value={this.state.mobile}
              onChange={this.state.handleMobileChange}
            />
          </FormGroup>
          <Button color="warning" onClick={this.submitProfileInfo}>
            Submit
          </Button>
          <br />
          {this.state.buttonClicked}
          {this.state.buttonClicked ? (
            <Alert color="warning" style={{ textAlign: "center" }}>
              Success!
            </Alert>
          ) : (
            " "
          )}
        </Form>
      </div>
    );
  }
}
export default Settings;
